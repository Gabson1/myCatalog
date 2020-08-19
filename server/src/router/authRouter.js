import express from 'express';

import * as validation from '../middlewares';
import * as controller from '../controllers';

let router = express.Router();

// @route    POST auth/signup
// @desc     Signup user
// @access   Public
router.post(
	'/signup',
	validation.createUserValidation,
	validation.genericValidator,
	controller.signupUser
);

// @route    POST auth/login
// @desc     Login user
// @access   Public
router.post(
	'/login',
	validation.loginUserValidation,
	validation.genericValidator,
	controller.loginUser
);

export default router;