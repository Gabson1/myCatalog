import { loginTypes as t } from '../types';

/*
export const loginAction = (email, password) => {
  return async (dispatch) => {
    try {
      const response = {  } // TODO: API call to db... if loggin --> check if user matches DB entry... if signup --> validate payload and add to DB
      dispatch({ type: t.LOGIN_SUCCESS, response })
    } catch (err) {
      dispatch({ type: t.LOGIN_FAILURE })
      throw new Error(err)
    }
  };
};
*/



export const loginAction = (email, password) => ({
  type: t.LOGIN_SUCCESS,
  payload: {
    email,
    password
  }
});
