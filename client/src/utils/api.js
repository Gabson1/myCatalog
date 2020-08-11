import axios from 'axios';
import store from '../store/store';
import { registrationTypes as t } from '../types/user';

const api = axios.create({
  baseURL: '/users',
  headers: {
    'Content-Type': 'application/json'
  }
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
 **/

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.data.msg === 'Token is not valid') {
      store.dispatch({ type: t.LOGOUT_SUCCESS });
    }
    return Promise.reject(err);
  }
);

export default api;
