import { loginTypes as t } from '../types';
import { loginEffect } from "../effects/loginEffect";

// TODO: api request on line 7
export const loginAction = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await loginEffect(email, password) // Mocked api call
      dispatch({ type: t.LOGIN_SUCCESS, response })
    } catch (e) {
      dispatch({ type: t.LOGIN_FAILURE })
    }
  };
};

// TODO: LOGOUT action