import { AUTH_SUCCESS } from './actionTypes';
import { verifyTokenRequest } from '../effects'

export const authenticateAction = () => {
  return (dispatch) => {
    const token = localStorage.getItem('user');
    const res = verifyTokenRequest(token);

    console.log('token + res', token, res);

    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data
    })
  };
};