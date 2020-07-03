import { loginTypes as t  } from '../types/login.typ';

const initialState = {
  isLoggedIn: false,
  user: {},
};

export const loginReducer = (state = initialState, action) => {
  const payload = action.payload;
  console.log('payload: ', payload);

  switch (action.type) {
    case t.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
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