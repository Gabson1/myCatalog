import { addNewCatalogRequest } from "../effects";
import { ADD_CATALOG_SUCCESS, ADD_CATALOG_FAILURE } from "./actionTypes";

export const addNewCatalogAction = (newCatalogData) => {
  return async (dispatch) => {
    try {
      const res = await addNewCatalogRequest(newCatalogData)
      dispatch({
        type: ADD_CATALOG_SUCCESS,
        payload: res.config.data
      })
    } catch (err) {
      dispatch({ type: ADD_CATALOG_FAILURE, payload: err.message })
    }
  };
};