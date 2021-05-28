/* eslint-disable no-console */
import bcrypt from 'bcrypt';

import User from '../models/userModel';
import { jwtSign } from '../middlewares';
import Catalog from '../models/catalogModel';

export const createUserService = async (res, { username, email, password }) => {
  try {
    // First check whether there is another user with the same email
    let user = await User.findOne({ email });

    // If one is found, return an error
    if (user) return res.status(400).json({ errors: [{ msg: 'User already exists' }] });

    // Before saving the user params, encrypt the password
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    // Save the user as a new User object
    user = new User({
      username,
      email,
      password,
    });

    // Save the user object
    await user.save();

    // This payload, consisting of the user id, will be used for the jwt signature
    const payload = {};
    payload.user = { id: user._id };

    // Create a jwt user token
    payload.token = jwtSign(payload);

    return payload;
    // If anything goes wrong, return an error
  } catch (err) {
    return err;
  }
};

export const loginUserService = async (res, { email, password }) => {
  try {
    // First check whether there is a user with the same email
    const user = await User.findOne({ email });

    // If none is found, return an error
    if (!user) return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });

    // Because the password was encrypted before saving, we must use the bcrypt.compare method to compare the password from the req.body to the password from the document
    const match = await bcrypt.compare(password, user.password);

    // If it does not match, return an error
    if (!match) return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });

    // This payload, consisting of the user id, will be used for the jwt signature
    const payload = {};
    payload.user = { id: user._id };

    // Create a jwt user token
    payload.token = jwtSign(payload);

    return payload;
    // If anything goes wrong, return an error
  } catch (err) {
    return err;
  }
};

export const updateUserProfileService = async (req) => {
  const { userId, newUserData } = req.body;

  try {
    const condition = { _id: userId };
    const update = {
      username: newUserData.username,
      email: newUserData.email,
    };

    const updatedUser = Catalog.findOneAndUpdate(condition, update, (err, doc) => {
      err ? console.log('err', err) : console.log('doc', doc);
    });

    return {
      success: true, statusCode: 200, message: 'User updated successfully', user: updatedUser,
    };
  } catch (err) {
    return err;
  }
};
