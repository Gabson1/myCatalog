import {enums} from "../../../shared/enums/testEnum";

export default function commonReducer(state = {}, action) {
  switch (action.type) {
    case enums.INITIAL_STATE:
      return {
        ...state,
        number: 0,
        ready: action.payload
      };
    case enums.TEST_STATE:
      return {
        ...state,
        userData: action.payload
      };
    case enums.INCREMENTER:
      return {
        ...state,
        number: state.number + action.payload
      };
    case enums.DECREMENTER:
      return {
        ...state,
        number: state.number - action.payload
      };
    default:
      return state
  }
}