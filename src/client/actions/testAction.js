import {enums} from "../../../shared/enums/testEnum";

export const CommonAction = () => dispatch => {
  dispatch({
    type: enums.INITIAL_STATE,
    payload: true
  });
};

export const TestAction = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => dispatch({
      type: enums.TEST_STATE,
      payload: data
    }));
};

export const Incrementer = () => dispatch => {
  dispatch({
    type: enums.INCREMENTER,
    payload: 1
  });
};

export const Decrementer = () => dispatch => {
  dispatch({
    type: enums.DECREMENTER,
    payload: 1
  });
};