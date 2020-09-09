import axios from 'axios';

import config from '../env.json';

// Destructure variables from the env.json file
const { apiUserRoute, backendUrl } = config;

// The full base userRoute for API calls
const fullApiUserRoute = backendUrl + apiUserRoute;

export const signupRequest = async (formData) => {
  try {
    return await axios.post(`${fullApiUserRoute}/signup`, formData);
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};

export const loginRequest = async (formData) => {
  try {
    return await axios.post(`${fullApiUserRoute}/login`, formData);
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};
