import express from 'express';

import * as validation from '../middlewares';
import * as controller from '../controllers';

const router = express.Router();

// @route    GET auth/
// @desc     Verify token authenticity and load user
// @access   Private
router.get(
  '/',
  // validation.jwtVerify,
  // validation.genericValidator,
  controller.loadUser,
);

export default router;
