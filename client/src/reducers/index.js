import { combineReducers } from 'redux';

import { loginReducer, signupReducer } from './userReducer';

const rootReducer = combineReducers({
  loginReducer,
  signupReducer
});

export default rootReducer;