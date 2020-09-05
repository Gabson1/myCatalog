import { REMOVE_TOAST, SET_TOAST } from './actionTypes';

export const setToast = (msg, toastType, timeout = 5000) => (dispatch) => {
  dispatch({
    type: SET_TOAST,
    payload: { msg, toastType },
  });

  setTimeout(() => dispatch({ type: REMOVE_TOAST }), timeout);
};
