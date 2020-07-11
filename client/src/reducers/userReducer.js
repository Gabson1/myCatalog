import { registrationTypes as t } from '../types/login';

const initialState = {
  isLoggedIn: false,
  user: {}
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action
      };
    case t.LOGIN_FAILURE:
      return state
    case t.LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
  }
}

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action
      };
    case t.SIGNUP_FAILURE:
      return state
    case t.LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
  }
}