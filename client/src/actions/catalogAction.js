import { addNewTableRequest } from "../effects";
import { ADD_TABLE_SUCCESS, ADD_TABLE_FAILURE } from "./actionTypes";

export const addNewTableAction = (assetType) => {
  return async (dispatch) => {
    try {
      const res = await addNewTableRequest(assetType)
      dispatch({
        type: ADD_TABLE_SUCCESS,
        payload: res.data
      })
    } catch (err) {
      dispatch({ type: ADD_TABLE_FAILURE, payload: err.message })
    }
  };
};