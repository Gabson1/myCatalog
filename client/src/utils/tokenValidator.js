import axios from 'axios';
import store from '../store/store';
import { LOGOUT_SUCCESS } from '../actions/actionTypes';

const tokenValidator = axios.create({
  baseURL: '/api',
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

tokenValidator.interceptors.response.use(
  res => res,
  err => {
    if (err.response.data.msg === 'Token is not valid') {
      store.dispatch({ type: LOGOUT_SUCCESS });
    }
    return Promise.reject(err);
  }
);

export default tokenValidator;
