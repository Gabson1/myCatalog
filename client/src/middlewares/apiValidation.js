import axios from 'axios';
import store from '../store/store';
import { registrationTypes as t } from '../types/userType';

/**
 TODO
 intercept any error responses from the apiValidation
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
 **/

export const apiInterceptor = () => {
	axios.interceptors.response.use(
		res => res,
		err => {
			if (err.response.data.msg === 'Token is not valid') {
				store.dispatch({ type: t.LOGOUT_SUCCESS });
			}
			return Promise.reject(err);
		}
	);
}
