import express from 'express';

import * as validation from '../middlewares';
import * as controller from '../controllers';

const router = express.Router();

// @route    POST user/signup
// @desc     Signup user
// @access   Public
router.post(
  '/signup',
  validation.createUserValidation,
  validation.genericValidator,
  controller.signupUser,
);

// @route    POST user/login
// @desc     Login user
// @access   Public
router.post(
  '/login',
  validation.loginUserValidation,
  validation.genericValidator,
  controller.loginUser,
);

export default router;
