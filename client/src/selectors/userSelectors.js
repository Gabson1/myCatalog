import _ from 'lodash';

export const selectUser = state => _.get(state, 'user.user', null);
