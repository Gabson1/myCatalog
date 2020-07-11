import { registrationTypes as t } from '../types';
import { loginUserRequest } from "../effects/userEffect";

export const signupUser = (payload) => async dispatch => {
  const user = await loginUserRequest(payload.email, payload.password);

  if (user) {
    dispatch({ type: t.SIGNUP, payload: user });
    window.location = "/";
  }
};

export const loginUser = (payload) => async dispatch => {
  const user = await loginUserRequest(payload.email, payload.password);

  if (user) {
    dispatch({ type: t.LOGIN, payload: user });
    window.location = "/";
  }
};

export const logoutUser = () => dispatch => {
  // TODO: Remove user jwt cookie

  dispatch({ type: t.LOGOUT });

  window.location = "/";
};
