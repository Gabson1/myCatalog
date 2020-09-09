import axios from 'axios';

import config from '../env.json';

// Destructure variables from the env.json file
const { apiUserRoute, backendUrl } = config;

// The full base userRoute for API calls
const fullApiUserRoute = backendUrl + apiUserRoute;

export const editUserProfileRequest = async (userId, newUserData) => {
  try {
    return axios.post(`${fullApiUserRoute}/update`, { userId, newUserData });
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};
