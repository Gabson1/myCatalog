import User from '../models/userModel';
import Catalog from '../models/catalogModel';


export const addNewCatalogService = async (req, res) => {
  const funcName = 'addNewCatalogService';

  const { assetType, description } = req.body;

  try {
    const user = await User.findById(req.user.id).select('-password');

    const newCatalog = new Catalog({
      assetType,
      description,
      creator: user.id
    });

    const catalog = await newCatalog.save()

    res.status(201).json({ catalog });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server error ${funcName}`);
  }
};

export const getAllCatalogsService = async (req, res) => {
  const funcName = 'getAllCatalogsService';

  try {
    const catalogs = await Catalog.find().sort({ date: -1 });

    res.status(201).json({ catalogs });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server error ${funcName}`);
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
    console.error(err.message);
    res.status(500).send(`Server error ${funcName}`);
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
    console.error(err.message);
    res.status(500).send(`Server error ${funcName}`);
  }
}