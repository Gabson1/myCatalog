import history from '../middlewares/history';

import { loginRequest, signupRequest } from '../effects';
import {
  LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS,
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
