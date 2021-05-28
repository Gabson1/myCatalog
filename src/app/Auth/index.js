import shortid from 'shortid';
import jwt from 'jsonwebtoken';
import getLocale from 'browser-locale';

import logger from 'shared/logger';
import fetchFn from 'shared/utils/fetch';
import Auth0 from './Auth';

import { getConfig } from '../configProvider';
import { getHistory } from '../history';

const STATE_KEY = 'auth0-state';

export const LOGIN_ACTION_KEYS = {
  CONTINUE_IPO: 'continueIpo',
};

let client = null;

/* eslint-disable class-methods-use-this */
export class AuthClient {
  constructor(history, config) {
    this.history = history;

    this.onRenewSessionLogout = this.onRenewSessionLogout.bind(this);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.getUserAfterLogin = this.getUserAfterLogin.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.createOAuthState = this.createOAuthState.bind(this);
    this.getOAuthState = this.getOAuthState.bind(this);
    this.clearOAuthState = this.clearOAuthState.bind(this);
    this.getNonceFromOAuthState = this.getNonceFromOAuthState.bind(this);
    this.getNonce = this.getNonce.bind(this);

    this.authConfig = {
      domain: config.domain,
      clientId: config.clientId,
      audience: config.audience,
      redirectUri: config.redirectUri,
    };

    this.internalAuthClient = new Auth0(
      this.history,
      this.onRenewSessionLogout,
      {
        domain: this.authConfig.domain,
        clientId: this.authConfig.clientId,
        redirectUri: this.authConfig.redirectUri,
        audience: this.authConfig.audience,
      },
    );
  }

  onRenewSessionLogout() {
    const currentHref = window.location.href;
    const currentOrigin = window.location.origin;
    const targetUrl = currentHref.split(currentOrigin)[1];
    this.createOAuthState({ targetUrl });
  }

  async signup(email, password) {
    let userLocale = getLocale();
    if (!userLocale) {
      userLocale = 'de-DE';
    }

    const user_metadata = { // eslint-disable-line camelcase
      locale: userLocale,
    };

    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        connection: 'Username-Password-Authentication',
        email,
        password,
        client_id: this.authConfig.clientId,
        user_metadata,
      }),
    };

    try {
      const response = await fetchFn(`https://${this.authConfig.domain}/dbconnections/signup`, options);
      const data = await response.json();

      /* eslint-disable no-underscore-dangle */
      if (data && data._id) {
        const result = data._id.indexOf('auth0|');
        if (result === -1) {
          data._id = `auth0|${data._id}`;
        }
      }
      return data;
    } catch (err) {
      logger.error({ err }, 'Something went wrong during signup!');

      if (err.code) {
        const standardCodes = ['invalid_signup', 'user_exists'];
        const code = standardCodes.includes(err.code) ? err.code : 'INTERNAL_SERVER_ERROR';
        return { code: code.toUpperCase() };
      }
      throw err;
    }
  }
  /* eslint-enable no-underscore-dangle */

  login(email, password, errorCallback) {
    const nonce = this.getNonceFromOAuthState();

    // will redirect to callback url
    // do not perform any logic after calling login() as it is not guaranteed to trigger!
    // any necessary logic should be part of the callback uri
    this.internalAuthClient.login(email, password, nonce, errorCallback);
  }

  logout() {
    this.internalAuthClient.logout();
  }

  maintenanceLogout() {
    this.internalAuthClient.logout(true);
  }

  async resetPassword(email) {
    return this.internalAuthClient.resetPassword(email);
  }

  async getUserInfo(accessToken) {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await fetchFn(`https://${this.authConfig.domain}/userinfo`, options);

    const responseJson = await response.json();
    if (!responseJson || !responseJson.email || !responseJson.sub) {
      return null;
    }

    return {
      email: responseJson.email,
      emailVerified: responseJson.email_verified,
      providerIdentityId: responseJson.sub,
    };
  }

  async getUserAfterLogin() {
    try {
      await this.internalAuthClient.handleAuthentication();
    } catch (error) {
      this.history.replace('/error');
    }

    const accessToken = this.getAccessToken();
    return this.getUserInfo(accessToken);
  }

  isAuthenticated() {
    return this.internalAuthClient.isAuthenticated();
  }

  getAccessToken() {
    return this.internalAuthClient.getAccessToken();
  }

  getIdToken() {
    return this.internalAuthClient.getIdToken();
  }

  createOAuthState({ targetUrl, targetAction }) {
    const nonce = shortid.generate();
    const data = {
      [nonce]: {
        targetUrl,
        targetAction,
      },
    };

    sessionStorage.setItem(STATE_KEY, JSON.stringify(data));
    return nonce;
  }

  getOAuthState = () => {
    const nonce = this.getNonce();

    const dataString = sessionStorage.getItem(STATE_KEY);
    if (!dataString) {
      return null;
    }

    const json = JSON.parse(dataString);
    const targetState = json[nonce];
    if (!targetState) {
      return null;
    }

    return targetState;
  };

  clearOAuthState() {
    sessionStorage.removeItem(STATE_KEY);
  }

  getNonceFromOAuthState() {
    const stateData = sessionStorage.getItem(STATE_KEY);
    if (!stateData) {
      return null;
    }

    const json = JSON.parse(stateData);
    if (!json) {
      return null;
    }

    return Object.keys(json)[0];
  }

  getNonce() {
    const idToken = this.getIdToken();
    if (!idToken) {
      throw new Error('Failed to get id token, cannot return nonce!');
    }

    const payload = jwt.decode(idToken);
    if (!payload) {
      throw new Error('Failed to decode id token payload, cannot find nonce!');
    }

    if (!payload.nonce) {
      throw new Error('No nonce found in id token payload!');
    }

    return payload.nonce;
  }
}

export const getAuthClient = () => {
  if (client) {
    return client;
  }

  const config = getConfig();
  const history = getHistory();

  client = new AuthClient(
    history,
    {
      domain: config.auth.domain,
      clientId: config.auth.clientId,
      redirectUri: config.auth.redirectUri,
      audience: config.auth.audience,
    },
  );

  return client;
};
/* eslint-enable class-methods-use-this */
