import { AUTH_SUCCESS, SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/actionTypes';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null
};

console.log('initialState?', initialState);


export default function (state = initialState, action) {
	const { type, payload } = action;

	console.log('action?', action);
	console.log('payload?', payload);

	switch (type) {
	case AUTH_SUCCESS:
		return {
			...state,
			...payload,
			isAuthenticated: true,
			loading: false
		};
	case SIGNUP_SUCCESS:
		return {
			...state,
			...payload,
			isAuthenticated: true,
			loading: false
		};
	case LOGIN_SUCCESS:
		return {
			...state,
			...payload,
			isAuthenticated: true,
			loading: false
		};
	case LOGOUT_SUCCESS:
		return {
			...state,
			token: null,
			isAuthenticated: false,
			loading: false,
			user: null
		};
	default:
		return state;
	}
}
