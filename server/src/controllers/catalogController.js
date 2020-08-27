import {
  addNewCatalogService,
  deleteCatalogService,
  getAllCatalogsService,
  updateCatalogService
} from '../services';

/**
 * @module signupUser
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @description makes a call to the createUserService
 * onSuccess: returns the newUser object && sets the statusCode to 200
 * onFailure: returns an http error && sets the statusCode to 500
 * @return json object
 */
export const addNewCatalog = async (req, res) => {
  try {
    const res = await addNewCatalogService(req, res);
    res.json({ success: res.success, message: res.message, catalogs: res.catalog });
  } catch (error) {
    res.json({ statusCode: 500, message: error, contentType: 'application/json' });
  }
};

export const updateCatalog = async (req, res) => {
  try {
    const res = await updateCatalogService(res, req.body);
    res.json({ success: res.success, message: res.message, catalog: res.catalog });
  } catch (error) {
    res.json({ statusCode: 500, message: error, contentType: 'application/json' });
  }
};

export const deleteCatalog = async (req, res) => {
  try {
    // Call the createUserService
    const res = await deleteCatalogService(res, req.body);

    // Send a json success message
    res.json({ success: true, message: 'Catalog removed!' });
  } catch (error) {
    // If anything goes wrong, return a json error
    res.json({ statusCode: 500, message: error, contentType: 'application/json' });
  }
};

export const getAllCatalogs = async (req, res) => {
  try {
    const catalog = await getAllCatalogsService()
    res.json({ success: true, catalog })
  } catch (error) {
    // If anything goes wrong, return a json error
    res.json({ statusCode: 500, message: error, contentType: 'application/json' });
  }
}
