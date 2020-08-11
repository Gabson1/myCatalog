import { cookieTypes as t } from '../types'

export const cookieAction = response => ({
  type: t.COOKIE_ACCEPT,
  payload: response,
});