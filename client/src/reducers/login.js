import { loginTypes as t } from '../types/login';

const initialState = {
  isLoggedIn: false,
  user: {}
};

export const loginReducer = (state = initialState, action) => {
  console.log('Action: ', action);
  console.log(action.user || {});
  switch (action.type) {
    case t.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user || {}
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