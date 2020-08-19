import { loginRequest, signupRequest } from '../effects';
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS } from './actionTypes';


// Signup User
export const signupAction = (formData) => {
	return async (dispatch) => {
		try {
			const res = await signupRequest(formData)
			dispatch({
				type: SIGNUP_SUCCESS,
				payload: res.data
			})
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
