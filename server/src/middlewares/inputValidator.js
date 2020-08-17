import { validationResult, check }  from 'express-validator';

export const genericValidator = (req, res, next) => {
	const funcName = 'genericValidator';
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		next();
	} catch (err) {
		console.error(funcName, err);
		res.status(500).send(err.message);
	}
};

export const createUserValidation = [
	check('username', 'Please choose a username').not().isEmpty(),
	check('email', 'Please enter a valid email').normalizeEmail().isEmail(),
	check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
];

export const loginUserValidation = [
	check('email', 'Please enter a valid email').normalizeEmail().isEmail(),
	check('password', 'Password is required').exists()
];
