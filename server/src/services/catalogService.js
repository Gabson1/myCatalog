import Catalog from '../models/catalogModel';
import mongoose from 'mongoose';

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

export const editAssetService = async (req) => {
  const {
    assetId,
    editAssetData,
  } = req.body;

  try {
    const condition = { 'assets._id': assetId };
    // const condition2 = { 'assets._id': mongoose.types.ObjectId(assetId) };
    const update = {
      assetName: editAssetData.assetName,
      assetQuantity: editAssetData.assetQuantity,
      singleQuantityPrice: editAssetData.singleQuantityPrice,
      totalQuantityPrice: editAssetData.totalQuantityPrice,
    };
    const options = { new: true };

    const newAsset = await Catalog.findOneAndUpdate(condition, { $push: update }, options).exec();

    return {
      success: true, statusCode: 200, message: 'Asset added successfully', newAsset,
    };
  } catch (err) {
    console.log(err);
  }
};

export const deleteDocumentService = async (req) => {
  const { id } = req.body;
  try {
    await Catalog.deleteOne({ id }).exec();

    return { success: true, statusCode: 200, message: 'Document removed successfully' };
  } catch (err) {
    console.log('err  ', err);
  }
};

export const importCatalogsService = async (req, res) => {
  try {
  } catch (err) {
    throw new Error(err.message);
  }
};

export const exportCatalogsService = async (req, res) => {
  try {
  } catch (err) {
    throw new Error(err.message);
  }
};
