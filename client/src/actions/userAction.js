import { registrationTypes as t } from '../types';
import { loginRequest, signupRequest } from "../effects/userEffect";

export const loginAction = (payload) => {
  return async (dispatch) => {
    try {
      const response = await loginRequest(payload.email, payload.password)
      dispatch({ type: t.LOGIN_SUCCESS, payload: response })
    } catch (e) {
      dispatch({ type: t.LOGIN_FAILURE })
    }
  };
};

export const signupAction = (payload) => {
  return async (dispatch) => {
    try {
      const response = await signupRequest(payload.username, payload.email, payload.password)
      dispatch({ type: t.SIGNUP_SUCCESS, payload: response })
    } catch (e) {
      dispatch({ type: t.SIGNUP_FAILURE })
    }
  };
};

export const logoutAction = () => ({ type: t.SIGNOUT_SUCCESS });
