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
  check('email').normalizeEmail().isEmail()
];

export const loginUserValidation = [
  check('email').normalizeEmail().isEmail(),
  check('password')
];
