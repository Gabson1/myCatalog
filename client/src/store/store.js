import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/index';
import setAuthToken from '../utils/setAuthToken';

const initialState = {};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
	applyMiddleware(thunk, logger),
);

const store = createStore(
	rootReducer,
	initialState,
	enhancer
);

// set up a store subscription listener
// to store the users token in localStorage

// initialize current state from redux store for subscription comparison
// preventing undefined error
let currentState = store.getState();

store.subscribe(() => {
	// keep track of the previous and current state to compare changes
	let previousState = currentState;
	currentState = store.getState();
	// if the token changes set the value in localStorage and axios headers
	if (previousState.token !== currentState.token) {
		const token = currentState.token;
		setAuthToken(token);
	}
});

export default store;