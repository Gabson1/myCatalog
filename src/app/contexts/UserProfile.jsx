import React, { Component } from 'react';
import PropTypes from 'prop-types';

import compose from 'lodash.flowright';
import { withApollo } from '@apollo/client/react/hoc';

import logger from 'shared/logger';

import { withAuthClient } from '../../Auth/useAuthClient';
import userProfileContextQuery from './userProfileContextQuery.graphql';

export const UserProfileContext = React.createContext();

const localStorageKey = 'userprofile-context';

export const contextShape = PropTypes.shape({
  id: PropTypes.string,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateUserContext: PropTypes.func.isRequired,
  fetchNewUserContext: PropTypes.func.isRequired,
  providerIdentityId: PropTypes.string,
  isVerified: PropTypes.func.isRequired,
  isEmailVerified: PropTypes.bool.isRequired,
  isRegistered: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.func.isRequired,
  user2faMethod: PropTypes.string,
  status: PropTypes.string,
});

export const fakeContext = {
  id: '',
  isVerified: () => true,
  roles: [],
  updateUserContext: () => {},
  fetchNewUserContext: () => {},
  providerIdentityId: '',
  isLoggedIn: () => true,
  isRegistered: true,
  user2faMethod: 'sms',
  isEmailVerified: true,
  status: 'APPROVED',
};

export class UserProfileProviderBase extends Component {
  constructor(props) {
    super(props);

    const existingProfile = localStorage.getItem(localStorageKey);
    if (existingProfile && existingProfile !== '') {
      this.state = JSON.parse(existingProfile);
    } else {
      this.state = {
        roles: ['ANONYMOUS'],
        isRegistered: false,
        isEmailVerified: false,
        isVerified: false,
        isLoggedIn: false,
        status: 'ANONYMOUS',
      };
    }

    this.updateUserContext = this.updateUserContext.bind(this);
    this.fetchNewUserContext = this.fetchNewUserContext.bind(this);
    this.isVerified = this.isVerified.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  updateUserContext = (userProfile) => new Promise((resolve) => {
    const contextProfile = {
      id: userProfile.id,
      providerIdentityId: userProfile.providerIdentityId,
      roles: userProfile.roles,
      user2faMethod: userProfile.user2fa ? userProfile.user2fa.type : null,
      isRegistered: userProfile.roles.includes('REGISTERED'),
      isEmailVerified: userProfile.emailVerified,
      status: userProfile.status,
    };

    localStorage.setItem(localStorageKey, JSON.stringify(contextProfile));
    this.setState(contextProfile, () => resolve());
  });

  async fetchNewUserContext(authProviderIdentityId) {
    try {
      const providerIdentityId = authProviderIdentityId
    || this.state.providerIdentityId; // eslint-disable-line react/destructuring-assignment

      if (!providerIdentityId) {
        throw new Error('Context was not initialized before, cannot find providerIdentityId!');
      }

      const { client } = this.props;
      const result = await client.query({
        query: userProfileContextQuery,
        fetchPolicy: 'network-only',
        variables: {
          providerIdentityId,
        },
      });

      if (!result || !result.data || !result.data.userProfile) {
        throw new Error('Did not receive new user profile during fetch!');
      }

      const { userProfile } = result.data;
      await this.updateUserContext(userProfile);
      return userProfile;
    } catch (err) {
      logger.error({ err }, 'Something went wrong when fetching new user context!');
      throw err;
    }
  }

  isVerified() {
    const { roles } = this.state;
    return roles.includes('VERIFIED');
  }

  // eslint-disable-next-line class-methods-use-this
  isLoggedIn() {
    const { authClient } = this.props;
    return authClient.isAuthenticated();
  }

  render() {
    const { children } = this.props;
    return (
      <UserProfileContext.Provider value={{
        ...this.state,
        updateUserContext: this.updateUserContext,
        fetchNewUserContext: this.fetchNewUserContext,
        isVerified: this.isVerified,
        isLoggedIn: this.isLoggedIn,
      }}
      >
        {children}
      </UserProfileContext.Provider>
    );
  }
}

UserProfileProviderBase.propTypes = {
  children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired,
  client: PropTypes.shape({}).isRequired,
  authClient: PropTypes.shape({}).isRequired,
};

export const UserProfileProvider = compose(
  withApollo,
  withAuthClient,
)(UserProfileProviderBase);

export const WithUserProfileContext = (WrappedComponent) => ({ ...restProps }) => (
  <UserProfileContext.Consumer>
    {(userProfileContext) => (
      <WrappedComponent userProfileContext={userProfileContext} {...restProps} />
    )}
  </UserProfileContext.Consumer>
);

export const UserProfileConsumer = UserProfileContext.Consumer;
