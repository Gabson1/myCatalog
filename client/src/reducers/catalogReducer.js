import { ADD_CATALOG_SUCCESS } from '../actions/actionTypes';

const initialState = {
  loading: true,
  catalogs: []
};

console.log('initialState?', initialState);


export default function (state = initialState, action) {
  const { type, payload } = action;

  console.log('action?', action);
  console.log('payload?', payload);

  switch (type) {
    case ADD_CATALOG_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        catalogs: [payload, ...state.catalogs]
      };
    default:
      return state;
  }
}
