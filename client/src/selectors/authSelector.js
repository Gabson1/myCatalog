import _ from 'lodash';

export const selectAuthentication = state => _.get(state, 'user.isAuthenticated', null);
