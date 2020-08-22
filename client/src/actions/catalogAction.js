import { addNewCatalogRequest } from "../effects";
import { ADD_CATALOG_SUCCESS, ADD_CATALOG_FAILURE } from "./actionTypes";

export const addNewCatalogAction = (assetType) => {
  return async (dispatch) => {
    try {
      const res = await addNewCatalogRequest(assetType)
      dispatch({
        type: ADD_CATALOG_SUCCESS,
        payload: res.data
      })
    } catch (err) {
      dispatch({ type: ADD_CATALOG_FAILURE, payload: err.message })
    }
  };
};