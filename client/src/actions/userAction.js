import { loginRequest, logoutRequest, signupRequest, loadUserRequest } from '../effects';
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS, USER_LOADED, AUTH_ERROR } from './actionTypes';

import { setToast } from "./toastAction";

// TODO: Remove the loadUserAction and replace it with a selector
// Load user information
export const loadUserAction = () => async dispatch => {
	try {
		const res = await loadUserRequest()

		dispatch({
			type: USER_LOADED,
			payload: res.data
		});
	} catch (err) {
		dispatch({ type: AUTH_ERROR, payload: err.message });
	}
};

// Signup User
export const signupAction = (formData) => {
	return async (dispatch) => {
		try {
			const res = await signupRequest(formData)
			dispatch({
				type: SIGNUP_SUCCESS,
				payload: res.data
			})
			localStorage.setItem('user', res.data.token);
		} catch (err) {
			dispatch({ type: SIGNUP_FAILURE, payload: err.message })
		}
	};
};

// Login User
export const loginAction = (formData) => {
	return async (dispatch) => {
		try {
			const res = await loginRequest(formData)
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			})

		} catch (err) {
			dispatch({ type: LOGIN_FAILURE, payload: err.message })
		}
	};
};

// Logout
export const logoutAction = () => dispatch => {
	localStorage.removeItem('user');
	dispatch({
		type: LOGOUT_SUCCESS,
	});
};
