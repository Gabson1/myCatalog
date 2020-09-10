import {
  addNewCatalogRequest, deleteDocumentRequest,
  getAllCatalogsRequest, addAssetRequest,
  importCatalogRequest, exportCatalogRequest,
  editAssetRequest,
} from '../effects';
import {
  ADD_CATALOG_SUCCESS, ADD_CATALOG_FAILURE,
  DELETE_CATALOG_SUCCESS, DELETE_CATALOG_FAILURE,
  GET_CATALOGS_SUCCESS, GET_CATALOGS_FAILURE,
  SET_CATALOG_EDITING, STOP_CATALOG_EDITING,
  SET_ASSET_EDITING, STOP_ASSET_EDITING,
  ADD_ASSET_SUCCESS, ADD_ASSET_FAILURE,
  EDIT_ASSET_SUCCESS, EDIT_ASSET_FAILURE,
  IMPORT_CATALOG_SUCCESS, IMPORT_CATALOG_FAILURE,
  EXPORT_CATALOG_SUCCESS, EXPORT_CATALOG_FAILURE,
} from './actionTypes';

// This action send a post request to add a new catalog for a specified user and
// updates the store with the new catalog document
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

// This action send a get request to update the application with all catalogs of a specified user and
// updates the store with all retrieved documents
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

// This action sets the 'editing' state of the application to true and
// updates the store with the catalogId which is being edited
export const editCatalogModeAction = (editMode, catalogId) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CATALOG_EDITING,
      payload: { editMode, catalogId },
    });
  } catch (err) {
    dispatch({
      type: STOP_CATALOG_EDITING,
      payload: err.message,
    });
  }
};

// This action send a post request to insert a new asset for a specified catalog and
// updates the store with the new asset documents
export const addAssetAction = (catalogId, newAssetData) => async (dispatch) => {
  try {
    const res = await addAssetRequest(catalogId, newAssetData);

    dispatch({
      type: ADD_ASSET_SUCCESS,
      payload: res.data.catalogs.assets,
    });
  } catch (err) {
    dispatch({
      type: ADD_ASSET_FAILURE,
      payload: err.message,
    });
  }
};

// This action sets the 'editing' state of the application to true and
// updates the store with the assetId which is being edited
export const editAssetModeAction = (editMode, assetId) => async (dispatch) => {
  try {
    dispatch({
      type: SET_ASSET_EDITING,
      payload: { editMode, assetId },
    });
  } catch (err) {
    dispatch({
      type: STOP_ASSET_EDITING,
      payload: err.message,
    });
  }
};

// This action send a post request to update the assets of a specified catalog and
// updates the store with the new asset documents
export const editAssetAction = (assetId, catalogId, editAssetData) => async (dispatch) => {
  try {
    await editAssetRequest(assetId, catalogId, editAssetData);

    dispatch({ type: EDIT_ASSET_SUCCESS });
  } catch (err) {
    dispatch({
      type: EDIT_ASSET_FAILURE,
      payload: err.message,
    });
  }
};

// This action send a post request to remove a catalog for a specified user and
// updates the store with the updated catalog collection
export const deleteDocumentAction = docId => async (dispatch) => {
  try {
    const res = await deleteDocumentRequest(docId);
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
