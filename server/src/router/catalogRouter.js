import express from 'express';

// import * as validation from '../middlewares';
import * as controller from '../controllers';

const router = express.Router();

// @route    POST catalog/add
// @desc     Create a new singleCatalog
// @access   Private
router.post(
  '/add',
  // validation.isValidAssetType,
  // validation.genericValidator,
  controller.addNewCatalog,
);

// @route    POST catalog/delete/catalog
// @desc     Delete a catalog
// @access   Private
router.post(
  '/delete/catalog',
  // verify whether user has gone through the full ui of deleting a singleCatalog
  // clicking on the delete button && confirming the popup modal
  controller.deleteCatalog,
);

// @route    POST catalog/delete/asset
// @desc     Delete an asset
// @access   Private
router.post(
  '/delete/asset',
  // verify whether user has gone through the full ui of deleting a singleCatalog
  // clicking on the delete button && confirming the popup modal
  controller.deleteAsset,
);

// @route    POST catalog/add/asset
// @desc     Add a new asset to a catalog
// @access   Private
router.post(
  '/add/asset',
  // validation.isValidAssetFields,
  controller.addAsset,
);

// @route    POST catalog/edit/asset
// @desc     Update the assets of a catalog
// @access   Private
router.post(
  '/edit/asset',
  // validation.isValidAssetFields,
  controller.editAsset,
);

// @route    GET catalog/
// @desc     Get all catalogs
// @access   Private
router.get(
  '/',
  // validate user
  controller.getAllCatalogs,
);

// @route    POST catalog/
// @desc     Import catalog
// @access   Private
router.post(
  '/import',
  // validate input
  controller.importCatalogs,
);

// @route    POST catalog/
// @desc     Import catalog
// @access   Private
router.post(
  '/export',
  // validate input
  controller.exportCatalogs,
);

export default router;
