import express from 'express';

import * as validation from '../middlewares/userMiddleware';
import * as controller from '../controllers/userController';

let router = express.Router();

router.post(
  '/signup',
  validation.createUserValidation,
  validation.genericValidator,
  controller.createUser
);

router.post(
  '/login',
  validation.loginUserValidation,
  validation.genericValidator,
  controller.loginUser
);

router.get(
  '/',
  controller.getAllUsers
);

export default router;