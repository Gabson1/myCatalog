import axios from 'axios';
// Destructure variables from the env.json file
import config from '../env.json';

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

// eslint-disable-next-line id-length
export const deleteDocumentRequest = async (docId) => {
  try {
    return axios.post(`${fullApiCatalogRoute}/delete`, { id: docId });
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};

export const getAllCatalogsRequest = async (userId) => {
  try {
    return axios.get(`${fullApiCatalogRoute}/`, { headers: { userId } });
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};

export const addAssetRequest = async (catalogId, newAssetData) => {
  try {
    return axios.post(`${fullApiCatalogRoute}/add/asset`, { catalogId, newAssetData });
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};

export const editAssetRequest = async (assetId, catalogId, editAssetData) => {
  try {
    return axios.post(`${fullApiCatalogRoute}/edit/asset`, { assetId, catalogId, editAssetData });
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};

export const importCatalogRequest = async (file) => {
  try {
    return axios.post(`${fullApiCatalogRoute}/catalog/import`, file);
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};

export const exportCatalogRequest = async (userId) => {
  try {
    return axios.get(`${fullApiCatalogRoute}/catalog/export`, { headers: { userId } });
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};
