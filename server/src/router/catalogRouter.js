import express from 'express';

import * as validation from '../middlewares';
import * as controller from '../controllers';

let router = express.Router();

// @route    POST catalog/add
// @desc     Create a new singleCatalog
// @access   Private
router.post(
  '/add',
  // validation.isValidAssetType,
  // validation.genericValidator,
  controller.addNewCatalog
);

// @route    POST catalog/delete
// @desc     Delete a singleCatalog
// @access   Private
router.post(
  '/delete',
  // verify whether user has gone through the full ui of deleting a singleCatalog
  // clicking on the delete button && confirming the popup modal
  controller.deleteCatalog
);

// @route    POST catalog/update
// @desc     Update a new singleCatalog
// @access   Private
router.post(
  '/update',
  // validate the entry
  // what is the user updating?
  // - assetType of singleCatalog? description of singleCatalog? asset entry within singleCatalog?
  controller.updateCatalog
);


export default router;