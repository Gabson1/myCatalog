import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import commonReducer from "../reducers/testReducer";

let initialState = {};

let middleware = [thunk];

export default createStore(commonReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);