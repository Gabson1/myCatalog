import { createBrowserHistory } from 'history';

let history = null;

export const getHistory = () => {
  if (history) {
    return history;
  }

  history = createBrowserHistory();
  return history;
};

export default getHistory();
