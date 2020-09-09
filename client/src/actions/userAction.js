import history from '../middlewares/history';

import { loginRequest, signupRequest, cookieConsentRequest } from '../effects';
import {
  SIGNUP_FAILURE, SIGNUP_SUCCESS,
  LOGIN_FAILURE, LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  COOKIE_ACCEPT_SUCCESS, COOKIE_ACCEPT_FAILURE,
} from './actionTypes';

import { storeAuthToken, removeStoredAuthToken } from '../utils/authToken';

// Signup User
export const signupAction = formData => async (dispatch) => {
  try {
    const res = await signupRequest(formData);
    storeAuthToken(res.data.data.token);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: SIGNUP_FAILURE, payload: err.message });
  }
};

// Login User
export const loginAction = formData => async (dispatch) => {
  try {
    const res = await loginRequest(formData);
    storeAuthToken(res.data.data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err.message });
  }
};

// Logout
export const logoutAction = () => (dispatch) => {
  removeStoredAuthToken();
  dispatch({ type: LOGOUT_SUCCESS });
  history.push('/');
};

export const cookieConsentAction = (userId, consent) => async (dispatch) => {
  try {
    const res = await cookieConsentRequest(userId, consent);

    dispatch({
      type: COOKIE_ACCEPT_SUCCESS,
      payload: res.data.catalogs.assets,
    });
  } catch (err) {
    dispatch({
      type: COOKIE_ACCEPT_FAILURE,
      payload: err.message,
    });
  }
};
