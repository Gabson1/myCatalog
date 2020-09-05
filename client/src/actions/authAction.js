import { AUTH_SUCCESS, AUTH_ERROR } from './actionTypes';
import { loadUserRequest } from '../effects';

import { getStoredAuthToken } from '../utils/authToken';

export const authenticateUserAction = () => async (dispatch) => {
  try {
    const token = getStoredAuthToken();
    const res = await loadUserRequest(token);

    console.log('res from the auathaction:', res);

    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data.loadedUser,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.message,
    });
  }
};
