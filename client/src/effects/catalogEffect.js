import axios from 'axios';
// Destructure variables from the env.json file
import config from "../env.json";

const { apiCatalogRoute, backendUrl } = config;

// The full base user route for apiValidation calls
const fullApiCatalogRoute = backendUrl + apiCatalogRoute;

export const addNewCatalogRequest = async (assetType, description) => {
  try {
    return axios.post(`${fullApiCatalogRoute}/add`, { assetType, description });
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
}