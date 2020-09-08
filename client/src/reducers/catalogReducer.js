import {
  ADD_CATALOG_SUCCESS,
  DELETE_CATALOG_SUCCESS, EDIT_CATALOG_SUCCESS,
  GET_CATALOGS_SUCCESS,
  SET_CATALOG_EDITING,
} from '../actions/actionTypes';

const initialState = {
  loading: true,
  catalogs: [],
  editing: false,
  catalogEditId: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CATALOG_SUCCESS:
      return {
        ...state,
        loading: false,
        editing: false,
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
        catalogs: [...payload],
      };
    case SET_CATALOG_EDITING:
      return {
        ...state,
        editing: payload.editMode,
        catalogEditId: payload.catalogId,
      };
    case EDIT_CATALOG_SUCCESS:
      return {
        ...state,
        loading: false,
        newAssets: [...payload],
      };
    default:
      return state;
  }
}
