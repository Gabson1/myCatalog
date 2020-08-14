/*
import {apiInterceptor} from '../middlewares/apiValidation';

const setAuthToken = token => {
	if (token) {
		apiInterceptor.defaults.headers.common['x-auth-token'] = token;
		localStorage.setItem('token', token);
	} else {
		delete apiInterceptor.defaults.headers.common['x-auth-token'];
		localStorage.removeItem('token');
	}
};

export default setAuthToken;

 */