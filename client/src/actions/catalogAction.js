import {
  addNewCatalogRequest, deleteCatalogRequest,
  getAllCatalogsRequest, editCatalogRequest
} from "../effects";
import {
  ADD_CATALOG_SUCCESS, ADD_CATALOG_FAILURE,
  DELETE_CATALOG_SUCCESS, DELETE_CATALOG_FAILURE,
  GET_CATALOGS_SUCCESS, GET_CATALOGS_FAILURE,
  SET_CATALOG_EDITING, STOP_CATALOG_EDITING,
  EDIT_CATALOG_SUCCESS, EDIT_CATALOG_FAILURE
} from "./actionTypes";

export const addNewCatalogAction = (newCatalogData) => {
  return async (dispatch) => {
    try {
      const res = await addNewCatalogRequest(newCatalogData)
      dispatch({
        type: ADD_CATALOG_SUCCESS,
        payload: res.config.data
      })
    } catch (err) {
      dispatch({
        type: ADD_CATALOG_FAILURE,
        payload: err.message
      })
    }
  };
};

export const deleteCatalogAction = (catalogId) => {
  return async (dispatch) => {
    try {
      const res = await deleteCatalogRequest(catalogId)
      dispatch({
        type: DELETE_CATALOG_SUCCESS,
        payload: res.config.data
      })
    } catch (err) {
      dispatch({
        type: DELETE_CATALOG_FAILURE,
        payload: err.message
      })
    }
  };
};

export const getAllCatalogsAction = (userId) => {
  return async (dispatch) => {
    try {
      const res = await getAllCatalogsRequest(userId)
      dispatch({
        type: GET_CATALOGS_SUCCESS,
        payload: res.data.catalog
      })
    } catch (err) {
      dispatch({
        type: GET_CATALOGS_FAILURE,
        payload: err.message
      })
    }
  };
};

export const setCatalogEditingAction = (catalogId, editing, action='SET') => {
  return (dispatch) => {
    if (action === 'STOP') {
      dispatch({
        type: STOP_CATALOG_EDITING,
        payload: catalogId, editing, action
      })
    } else {
      dispatch({
        type: SET_CATALOG_EDITING,
        payload: catalogId, editing, action
      })
    }
  };
};


export const editCatalogDataAction = (newCatalogData) => {
  return async (dispatch) => {
    try {
      const res = await editCatalogRequest(newCatalogData)
      dispatch({
        type: EDIT_CATALOG_SUCCESS,
        payload: res.data.catalog
      })
    } catch (err) {
      dispatch({
        type: EDIT_CATALOG_FAILURE,
        payload: err.message
      })
    }
  };
}