import { toastTypes as t } from '../types';

export const setToast = (msg, alertType, timeout = 5000) => dispatch => {
	dispatch({
		type: t.SET_TOAST,
		payload: { msg, alertType }
	});

	setTimeout(() => dispatch({ type: t.REMOVE_TOAST }), timeout);
};