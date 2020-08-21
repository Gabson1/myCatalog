import { combineReducers } from 'redux';

import user from './userReducer';
import toast from './toastReducer';
import catalog from './catalogReducer';

const rootReducer = combineReducers({
	user,
	toast,
	catalog
});

export default rootReducer;