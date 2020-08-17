import express from 'express';

import * as validation from '../middlewares';
import * as controller from '../controllers';

let router = express.Router();

// @route    GET user/:id
// @desc     Get user by id
// @access   Private
router.get(
  '/:id',
  validation.jwtVerify,
  validation.genericValidator,
  controller.getUserById
);

// REMOVE LATER... THIS IS ONlY FOR TESTING PURPOSES, DO NOT SUBMIT THIS
// @route    GET user/all
// @desc     Get all users
// @access   Private
router.get(
  '/all',
  controller.getAllUsers
);

export default router;