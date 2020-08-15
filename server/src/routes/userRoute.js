import express from 'express';

import * as validation from '../middlewares/inputValidator';
import * as controller from '../controllers/userController';

let router = express.Router();

router.post(
	'/signup',
	validation.createUserValidation,
	validation.genericValidator,
	controller.createUser
);

router.post(
	'/logout',
	controller.signoutUser
);

router.post(
	'/login',
	validation.loginUserValidation,
	validation.genericValidator,
	controller.loginUser
);

router.get(
	'/auth',
	validation.genericValidator,
	controller.validateUserToken
);

router.get(
	'/',
	controller.getAllUsers
);

export default router;