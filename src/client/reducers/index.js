import { combineReducers } from 'redux';

import { loginReducer } from './login.red';

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;