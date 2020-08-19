import { combineReducers } from 'redux';

import user from './userReducer';
import toast from './toastReducer';

const rootReducer = combineReducers({
	user,
	toast
});

export default rootReducer;