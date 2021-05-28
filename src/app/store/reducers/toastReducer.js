import { SET_TOAST, REMOVE_TOAST } from '../actions/actionTypes';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TOAST:
      return [...state, payload];
    case REMOVE_TOAST:
      return state.filter(toast => toast.id !== payload);
    default:
      return state;
  }
}
