import axios from 'axios';
// Destructure variables from the env.json file
import config from "../env.json";

const { apiCatalogRoute, backendUrl } = config;

// The full base user route for apiValidation calls
const fullApiCatalogRoute = backendUrl + apiCatalogRoute;

export const addNewCatalogRequest = async (newCatalogData) => {
  try {
    return axios.post(`${fullApiCatalogRoute}/add`, newCatalogData);
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};

export const deleteCatalogRequest = async (catalogId) => {
  try {
    return axios.post(`${fullApiCatalogRoute}/delete`, catalogId);
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};

export const getAllCatalogsRequest = async () => {
  try {
    return axios.get(`${fullApiCatalogRoute}/`);
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};
