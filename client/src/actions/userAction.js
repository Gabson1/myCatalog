import api from '../utils/api';
import { setToast } from './toast';
import { registrationTypes as t } from '../types/userType';

// Load User
export const loadUserAction = () => async dispatch => {
	try {
		const res = await api.get('/auth');

		dispatch({
			type: t.USER_LOADED,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: t.AUTH_ERROR
		});
	}
};

// Signup User
export const signupAction = formData => async dispatch => {
	try {
		const res = await api.post('/users', formData);

		dispatch({
			type: t.SIGNUP_SUCCESS,
			payload: res.data
		});
		dispatch(loadUserAction());
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach(error => dispatch(setToast(error.msg, 'danger')));
		}

		dispatch({
			type: t.SIGNUP_FAILURE
		});
	}
};

// Login User
export const loginAction = (email, password) => async dispatch => {
	const body = { email, password };

	try {
		const res = await api.post('/auth', body);

		dispatch({
			type: t.LOGIN_SUCCESS,
			payload: res.data
		});
		dispatch(loadUserAction());
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach(error => dispatch(setToast(error.msg, 'danger')));
		}

		dispatch({
			type: t.LOGIN_FAILURE
		});
	}
};

// Logout
export const logoutAction = () => ({ type: t.LOGOUT_SUCCESS });