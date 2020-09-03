import { check } from 'express-validator';

export const createUserValidation = [
  check('username', 'Please choose a username').not().isEmpty(),
  check('email', 'Please enter a valid email').normalizeEmail().isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
];

export const loginUserValidation = [
  check('email', 'Please enter a valid email').normalizeEmail().isEmail(),
  check('password', 'Password is required').exists(),
];

export const isValidAssetType = [
  check('assetType', 'Please choose an asset type').not().isEmpty(),
];
