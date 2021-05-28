import { editUserProfileRequest } from '../effects';
import { EDIT_USERPROFILE_SUCCESS, EDIT_USERPROFILE_FAILURE } from './actionTypes';

// This action send a post request to update the user profile and
// updates the store with the new user data
export const editUserProfileAction = (userId, newUserData) => async (dispatch) => {
  try {
    const res = await editUserProfileRequest(userId, newUserData);
    dispatch({
      type: EDIT_USERPROFILE_SUCCESS,
      payload: res.data.user,
    });
  } catch (err) {
    dispatch({
      type: EDIT_USERPROFILE_FAILURE,
      payload: err.message,
    });
  }
};
