import { cookieTypes as t } from '../types'
import api from "../utils/api";

export const cookieAction = response => async dispatch => {
  try {
    const res = await api.post('/cookie', response);

    dispatch({
      type: t.COOKIE_ACCEPT,
      payload: res.data
    });
  } catch (err) {
    throw new Error('error in cookieAction')
  }
};