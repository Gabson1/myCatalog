import {
  addNewCatalogRequest, deleteCatalogRequest,
  getAllCatalogsRequest, editCatalogRequest,
  importCatalogRequest, exportCatalogRequest,
} from '../effects';
import {
  ADD_CATALOG_SUCCESS, ADD_CATALOG_FAILURE,
  DELETE_CATALOG_SUCCESS, DELETE_CATALOG_FAILURE,
  GET_CATALOGS_SUCCESS, GET_CATALOGS_FAILURE,
  // SET_CATALOG_EDITING, STOP_CATALOG_EDITING,
  EDIT_CATALOG_SUCCESS, EDIT_CATALOG_FAILURE,
  IMPORT_CATALOG_SUCCESS, IMPORT_CATALOG_FAILURE,
  EXPORT_CATALOG_SUCCESS, EXPORT_CATALOG_FAILURE,
} from './actionTypes';

export const addNewCatalogAction = newCatalogData => async (dispatch) => {
  try {
    const res = await addNewCatalogRequest(newCatalogData);
    dispatch({
      type: ADD_CATALOG_SUCCESS,
      payload: res.data.catalogs,
    });
  } catch (err) {
    dispatch({
      type: ADD_CATALOG_FAILURE,
      payload: err.message,
    });
  }
};

export const deleteCatalogAction = catalogId => async (dispatch) => {
  try {
    const res = await deleteCatalogRequest(catalogId);
    dispatch({
      type: DELETE_CATALOG_SUCCESS,
      payload: res.data.catalogs,
    });
  } catch (err) {
    dispatch({
      type: DELETE_CATALOG_FAILURE,
      payload: err.message,
    });
  }
};

export const getAllCatalogsAction = userId => async (dispatch) => {
  try {
    const res = await getAllCatalogsRequest(userId);

    dispatch({
      type: GET_CATALOGS_SUCCESS,
      payload: res.data.catalogs,
    });
  } catch (err) {
    dispatch({
      type: GET_CATALOGS_FAILURE,
      payload: err.message,
    });
  }
};

export const editCatalogDataAction = newCatalogData => async (dispatch) => {
  try {
    const res = await editCatalogRequest(newCatalogData);
    dispatch({
      type: EDIT_CATALOG_SUCCESS,
      payload: res.data.catalog,
    });
  } catch (err) {
    dispatch({
      type: EDIT_CATALOG_FAILURE,
      payload: err.message,
    });
  }
};

export const importCatalogAction = file => async (dispatch) => {
  try {
    const res = await importCatalogRequest(file);
    dispatch({
      type: IMPORT_CATALOG_SUCCESS,
      payload: res.data.catalog,
    });
  } catch (err) {
    dispatch({
      type: IMPORT_CATALOG_FAILURE,
      payload: err.message,
    });
  }
};

export const exportCatalogAction = userId => async (dispatch) => {
  try {
    const res = await exportCatalogRequest(userId);
    dispatch({
      type: EXPORT_CATALOG_SUCCESS,
      payload: res.data.catalog,
    });
  } catch (err) {
    dispatch({
      type: EXPORT_CATALOG_FAILURE,
      payload: err.message,
    });
  }
};
