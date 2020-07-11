import { registrationTypes as t } from '../types/registrationTypes';

const initialState = {
  isLoggedIn: false,
  user: {}
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGIN:
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