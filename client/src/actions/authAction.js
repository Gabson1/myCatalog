import { AUTH_SUCCESS, AUTH_ERROR } from './actionTypes';
import { loadUserRequest } from '../effects';

import { getStoredAuthToken } from '../utils/authToken';

export const authenticateUserAction = () => async (dispatch) => {
  try {
    const token = getStoredAuthToken();
    const res = await loadUserRequest(token);

    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data.userPayload,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.message,
    });
  }
};
