import { AUTH_SUCCESS, SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/actionTypes';

const initialState = {
  token: null,
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
