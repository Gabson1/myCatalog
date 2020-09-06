import {
  addNewCatalogService,
  deleteCatalogService,
  getAllCatalogsService, importCatalogsService,
  updateCatalogService,
} from '../services';

/**
 * @module addNewCatalog
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @description makes a call to the addNewCatalogService
 * onSuccess: returns the new entry object && sets the statusCode to 200
 * onFailure: returns an http error && sets the statusCode to 500
 * @return json object
 */
export const addNewCatalog = async (req, res) => {
  try {
    const result = await addNewCatalogService(req, res);
    res.json({
      success: result.success,
      statusCode: result.statusCode,
      message: result.message,
      catalogs: result.catalog,
    });
  } catch (err) {
    res.json({
      statusCode: 500,
      message: err,
      contentType: 'application/json',
    });
  }
};

export const updateCatalog = async (req, res) => {
  try {
    const result = await updateCatalogService(req, res);

    res.json({
      success: result.success,
      statusCode: result.statusCode,
      message: result.message,
      catalogs: result.catalog,
    });
  } catch (err) {
    res.json({ statusCode: 500, message: err, contentType: 'application/json' });
  }
};

export const deleteCatalog = async (req, res) => {
  try {
    const result = await deleteCatalogService(req, res);

    res.json({
      success: result.success,
      statusCode: result.statusCode,
      message: result.message,
    });
  } catch (err) {
    res.json({ statusCode: 500, message: err, contentType: 'application/json' });
  }
};

export const getAllCatalogs = async (req, res) => {
  try {
    const result = await getAllCatalogsService(req, res);
    res.json({
      success: result.success,
      statusCode: result.statusCode,
      message: result.message,
      catalogs: result.catalogs,
    });
  } catch (err) {
    res.json({ statusCode: 500, message: err, contentType: 'application/json' });
  }
};

export const importCatalogs = async (req, res) => {
  try {
    const result = await importCatalogsService(req, res);
    res.json({
      success: result.success,
      statusCode: result.statusCode,
      message: result.message,
    });
  } catch (err) {
    res.json({ statusCode: 500, message: err, contentType: 'application/json' });
  }
};

export const exportCatalogs = async (req, res) => {
  try {
    const result = await exportCatalogsService(req, res);
    res.json({
      success: result.success,
      statusCode: result.statusCode,
      message: result.message,
    });
  } catch (err) {
    res.json({ statusCode: 500, message: err, contentType: 'application/json' });
  }
};
