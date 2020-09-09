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
    return err;
  }
};

export const addAssetService = async (req) => {
  const {
    catalogId,
    newAssetData,
  } = req.body;

  try {
    const newAsset = await Catalog.findByIdAndUpdate(
      { _id: catalogId },
      { $addToSet: { assets: newAssetData } },
    ).exec();

    const asset = await newAsset.save();

    return {
      success: true, statusCode: 200, message: 'Asset added successfully', asset,
    };
  } catch (err) {
    return err;
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
    return err;
  }
};

export const editAssetService = async (req, res) => {
  const {
    assetId,
    editAssetData,
  } = req.body;

  const {
    assetName, assetQuantity, singleQuantityPrice, totalQuantityPrice,
  } = editAssetData;

  try {
    const condition = { _id: assetId };
    const updateData = {
      assetName: assetName,
      assetQuantity: assetQuantity,
      singleQuantityPrice: singleQuantityPrice,
      totalQuantityPrice: totalQuantityPrice,
    };
    const options = {
      new: true, lean: true, omitUndefined: true, returnOriginal: false, remove: {}, fields: {},
    };

    const newAsset = await Catalog.findOneAndUpdate({ condition }, { $set: updateData }, { options }).exec();

    return {
      success: true, statusCode: 200, message: 'Asset added successfully', asset: newAsset,
    };
  } catch (err) {
    return err;
  }
};

export const deleteDocumentService = async (req) => {
  const { id } = req.body;
  try {
    await Catalog.deleteOne({ id }).exec();

    return { success: true, statusCode: 200, message: 'Document removed successfully' };
  } catch (err) {
    return err;
  }
};

export const importCatalogsService = async (req, res) => {
  try {
  } catch (err) {
    return err;
  }
};

export const exportCatalogsService = async (req, res) => {
  try {
  } catch (err) {
    return err;
  }
};
