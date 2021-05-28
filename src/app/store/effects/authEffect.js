import axios from 'axios';

import config from '../env.json';

// Destructure variables from the env.json file
const { apiAuthRoute, backendUrl } = config;

// The full base authRoute for API calls
const fullApiAuthRoute = backendUrl + apiAuthRoute;

export const loadUserRequest = (token) => {
  try {
    return axios.get(`${fullApiAuthRoute}/`, { headers: { Authorization: token } });
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};
