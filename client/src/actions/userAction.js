import { loginRequest, logoutRequest, signupRequest } from '../effects';
import { registrationTypes as t } from '../types/userType';

// TODO: FIX ERROR HANDLING In ACTIONS
// import { setToast } from './toast';

// Signup User
export const signupAction = (formData) => {
	return async (dispatch) => {
		try {
			const res = await signupRequest(formData)
			dispatch({ type: t.SIGNUP_SUCCESS, payload: res.data })
		} catch (err) {
			dispatch({ type: t.SIGNUP_FAILURE, payload: err.message })
		}
	};
};

// Login User
export const loginAction = (formData) => {
	return async (dispatch) => {
		try {
			const res = await loginRequest(formData)
			dispatch({ type: t.LOGIN_SUCCESS, payload: res.data })

		} catch (err) {
			dispatch({ type: t.SIGNUP_FAILURE, payload: err.message })
		}
	};
};

// Logout
export const logoutAction = () => {
	return async (dispatch) => {
		try {
			await logoutRequest()
			dispatch({ type: t.LOGOUT_SUCCESS })
		} catch (err) {
			dispatch({ type: t.LOGOUT_FAILURE, payload: err.message })
		}
	};
};