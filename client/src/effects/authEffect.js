import axios from 'axios';

import config from '../env.json';

// Destructure variables from the env.json file
const { apiAuthRoute, backendUrl } = config;

// The full base user route for apiValidation calls
const fullApiAuthRoute = backendUrl + apiAuthRoute;

export const signupRequest = async (formData) => {
  try {
    return await axios.post(`${fullApiAuthRoute}/signup`, formData);
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};

export const loginRequest = async (formData) => {
  try {
    return await axios.post(`${fullApiAuthRoute}/login`, formData);
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};

export const logoutRequest = async () => {
  try {
    return await axios.post(`${fullApiAuthRoute}/logout`);
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};
