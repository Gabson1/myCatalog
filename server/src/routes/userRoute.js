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
	'/logout',
	controller.signoutUser
);

router.post(
	'/login',
	validation.loginUserValidation,
	validation.genericValidator,
	controller.loginUser
);

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get(
	'/auth', auth, async (req, res) => {
		try {
			const user = await User.findById(req.user.id).select('-password');
			res.json(user);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	});

router.get(
	'/',
	controller.getAllUsers
);

export default router;