import Catalog from '../models/catalogModel';

export const addNewCatalogService = async (req) => {
  const {
    assetType,
    description,
    userId,
  } = req.body;

  try {
    const newCatalog = new Catalog({
      assetType,
      description,
      creator: userId,
      assets: [],
    });

    const catalog = await newCatalog.save();

    return {
      success: true, statusCode: 200, message: 'Catalog created successfully', catalog,
    };
  } catch (err) {
    throw new Error(err.message);
  }
};

export const updateCatalogService = async (req, res) => {

};

export const deleteCatalogService = async (req, res) => {
  const funcName = 'deleteCatalogService';

  try {
    const catalog = await Catalog.findById(req.params.id);

    if (!catalog) {
      return res.status(404).json({ msg: 'Catalog not found' });
    }

    await catalog.remove();
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getAllCatalogsService = async (req, res) => {
  const { userid } = req.headers;

  try {
    const catalogs = await Catalog.find({ creator: userid }).exec();

    if (!catalogs) {
      return res.status(404).json({ msg: 'No catalogs for user' });
    }

    return {
      success: true, statusCode: 200, message: 'Catalogs found successfully', catalogs,
    };
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getCatalogByIdService = async (req, res) => {
  const funcName = 'getCatalogByIdService';

  try {
    const catalog = await Catalog.findById(req.params.id);
    if (!catalog) {
      return res.status(404).json({ msg: 'Catalog not found' });
    }

    res.status(201).json({ catalog });
  } catch (err) {
    throw new Error(err.message);
  }
};
