import User from '../models/userModel';
import { findUserByIdService } from '../services';
import { setHeader } from '../utils/setHeader';

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({}, '-password'); // Omit password
    setHeader(res, 200);
    res.json({ data: allUsers });
  } catch (error) {
    setHeader(res, 500);
    res.json({error});
  }
};

/**
 * @module getUserById
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @description makes a call to the findUserByIdService
 * onSuccess: returns the user object && sets the statusCode to 200
 * onFailure: returns an http error && sets the statusCode to 500
 * @return json object
 */
export const getUserById = async (req, res) => {
  try {
    await findUserByIdService(req, res)
  } catch (error) {
    setHeader(res, 500);
    res.json({error});
  }
}