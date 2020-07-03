import { validationResult, check }  from 'express-validator';

export const genericValidator = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

export const createUserValidation = [
  check('username', 'Please provide a username').not().isEmpty(),
  check('email', 'Please insert a valid email').normalizeEmail().isEmail(),
  check('password', 'Please insert a valid password with a minimum length of 8 characters').isLength({ min: 8 })
];

export const loginUserValidation = [
  check('email', 'Please insert a valid email').normalizeEmail().isEmail(),
  check('password', 'Please insert a valid password').isLength({ min: 8 })
];
