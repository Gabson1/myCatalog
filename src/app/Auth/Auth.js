import auth0 from 'auth0-js';
import jwt from 'jsonwebtoken';

const auth0StorageDataKey = 'auth0-data';

export class Auth {
  accessToken;

  idToken;

  expiresAt;

  webAuth;

  tokenRenewalTimeout;

  constructor(history, onRenewSessionLogout, config) {
    this.accessToken = null;
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.setSession = this.setSession.bind(this);
    this.history = history;
    this.onRenewSessionLogout = onRenewSessionLogout;

    this.webAuth = new auth0.WebAuth({
      domain: config.domain,
      clientID: config.clientId,
      redirectUri: config.redirectUri,
      responseType: 'token id_token',
      scope: 'openid profile email',
      audience: config.audience,
    });

    const storageData = JSON.parse(localStorage.getItem(auth0StorageDataKey));
    if (!storageData) {
      return;
    }

    try {
      const {
        expiresAt,
        idToken,
        accessToken,
      } = storageData;

      // --------IN REVIEW---------
      // looks good, testing is also successful,  but need to check how it works live
      const payload = jwt.decode(idToken);
      const { exp } = payload;

      const now = Date.now();
      // need to multiply with 1000 because exp is in seconds not milliseconds!
      if ((expiresAt && expiresAt < now) || (!exp || exp * 1000 < now)) {
        this.logout();
        return;
      }
      // -----------------

      this.idToken = idToken;
      this.accessToken = accessToken;
      this.expiresAt = expiresAt;

      this.renewSession();
      return;
    } catch (error) {
      console.error({ err: error }, 'Could not decode json payload');
    }
  }

  login(email, password, nonce, errorCallback) {
    localStorage.clear();

    this.webAuth.login({
      realm: 'Username-Password-Authentication',
      email,
      password,
      nonce,
    }, errorCallback);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => this.webAuth.parseHash((err, authResult) => {
      if (err) {
        console.error({ err }, 'Error occurred when parsing the authentication hash');
        return reject(err);
      }

      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        return resolve('done');
      }

      return reject(new Error('Unknown error'));
    }));
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  scheduleRenewal() {
    const { expiresAt } = this;
    // make checksession 10 seconds earlier than expiration
    const timeout = expiresAt - Date.now() - 10 * 1000;
    if (timeout > 0) {
      this.tokenRenewalTimeout = setTimeout(() => {
        this.renewSession();
      }, timeout);
    }
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    const expiresAt = (authResult.expiresIn * 1000) + new Date(Date.now()).getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    const storageData = JSON.stringify({
      expiresAt: this.expiresAt,
      accessToken: this.accessToken,
      idToken: this.idToken,
    });

    localStorage.setItem(auth0StorageDataKey, storageData);

    this.scheduleRenewal();
  }

  renewSession() {
    this.webAuth.checkSession({}, (err, authResult) => {
      if (err) {
        console.error({ err }, 'Error when trying to renew session');

        if (this.onRenewSessionLogout) {
          this.onRenewSessionLogout();
        }

        this.logout();

        return;
      }

      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      }
    });
  }

  logout(goToMaintenancePage = false) {
    const returnPath = goToMaintenancePage
      ? '/maintenance'
      : '/logout-success';

    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    console.log('Logging out...'); // eslint-disable-line no-console

    localStorage.clear();

    clearTimeout(this.tokenRenewalTimeout);

    this.webAuth.logout({
      returnTo: `${window.location.origin}${returnPath}`,
    });

    // this.history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    const { expiresAt } = this;
    return new Date().getTime() < expiresAt;
  }

  async resetPassword(email) {
    return new Promise((resolve, reject) => {
      this.webAuth.changePassword({
        connection: 'Username-Password-Authentication',
        email,
      }, (err, response) => {
        if (err) {
          console.error({ err }, 'Could not change password');
          return reject(err);
        }

        return resolve(response);
      });
    });
  }
}

export default Auth;
