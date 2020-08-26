import User from '../models/userModel';
import Catalog from '../models/catalogModel';


export const addNewCatalogService = async (req) => {
  const { assetType, description, creator } = req.body;

  try {
   //  const user = await User.findById(req.user.id).select('-password');

    const newCatalog = new Catalog({
      assetType,
      description,
      creator: 'user'
    });

    const catalog = await newCatalog.save();

    return { success: true, message: 'Catalog created successfully', catalog }
  } catch (err) {
    throw new Error(err.message);
  }
};

export const updateCatalogService = async (req, res) => {

};

export const deleteCatalogService = async (req, res) => {
  const funcName = 'deleteCatalogService';

  try {
    const catalog = await Catalog.findById(req.params.id)

    if (!catalog) {
      return res.status(404).json({ msg: 'Catalog not found' })
    }

    await catalog.remove()

  } catch (err) {
    throw new Error(err.message);
  }
}

export const getAllCatalogsService = async (req, res) => {
  try {
    // Todo: find only the catalogs for the given user
    const catalog = await Catalog.find().sort({ date: -1 }).exec();
    console.log(catalog)

    return { catalogs: catalog };
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getCatalogByIdService = async (req, res) => {
  const funcName = 'getCatalogByIdService';

  try {
    const catalog = await Catalog.findById(req.params.id);

    if (!catalog) {
      return res.status(404).json({ msg: 'Catalog not found' })
    }

    res.status(201).json({ catalog });
  } catch (err) {
    throw new Error(err.message);
  }
};
