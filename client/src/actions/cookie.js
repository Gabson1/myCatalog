import { cookieTypes as t } from '../types';
import apiValidation from '../middlewares/apiValidation';

export const cookieAction = response => async dispatch => {
	try {
		const res = 'ww'

		dispatch({
			type: t.COOKIE_ACCEPT,
			payload: res
		});
	} catch (err) {
		throw new Error('error in cookieAction');
	}
};