import {
  ADD_CATALOG_SUCCESS,
  DELETE_CATALOG_SUCCESS,
  GET_CATALOGS_SUCCESS,
  SET_CATALOG_EDITING,
} from '../actions/actionTypes';

const initialState = {
  loading: true,
  catalogs: [],
  editing: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CATALOG_SUCCESS:
      return {
        ...state,
        loading: false,
        catalogs: [payload, ...state.catalogs],
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
        catalogs: [payload, ...state.catalogs],
      };
    case SET_CATALOG_EDITING:
      return {
        ...state,
        editing: payload,
      };
    default:
      return state;
  }
}
