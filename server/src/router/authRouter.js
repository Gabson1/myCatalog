import express from 'express';

import * as controller from '../controllers';
import * as util from '../utils';

const router = express.Router();

router.use(util.authStrategy);

// @route    GET auth/
// @desc     Verify token authenticity and load user
// @access   Private
router.get(
  '/',
  controller.loadUser,
);

export default router;
