import { v4 as uuidv4 } from 'uuid';
import { SET_TOAST, REMOVE_TOAST } from './actionTypes';

export const setToast = (msg, toastType, timeout = 5000) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_TOAST,
    payload: { msg, toastType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_TOAST, payload: id }), timeout);
};
