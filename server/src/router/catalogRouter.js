import express from 'express';

import * as validation from '../middlewares';
import * as controller from '../controllers';

let router = express.Router();

// @route    POST catalog/add
// @desc     Create a new catalog
// @access   Private
router.get(
  '/add',
  validation.isValidAssetType,
  validation.genericValidator,
  controller.addNewCatalog
);

// @route    POST catalog/delete
// @desc     Delete a catalog
// @access   Private
router.get(
  '/delete',
  // verify whether user has gone through the full ui of deleting a catalog
  // clicking on the delete button && confirming the popup modal
  controller.deleteCatalog
);

// @route    POST catalog/update
// @desc     Update a new catalog
// @access   Private
router.get(
  '/update',
  // validate the entry
  // what is the user updating?
  // - assetType of catalog? description of catalog? asset entry within catalog?
  controller.updateCatalog
);


export default router;