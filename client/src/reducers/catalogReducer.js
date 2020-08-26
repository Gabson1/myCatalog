import {ADD_CATALOG_SUCCESS, DELETE_CATALOG_SUCCESS, GET_CATALOGS_SUCCESS} from '../actions/actionTypes';

const initialState = {
  loading: true,
  catalogs: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CATALOG_SUCCESS:
      return {
        ...state,
        loading: false,
        catalogs: [payload, ...state.catalogs]
      };
    case DELETE_CATALOG_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case GET_CATALOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        catalogs: [payload, ...state.catalogs]
      };
    default:
      return state;
  }
}
