import { loadUserService } from '../services';

/**
 * @module loadUser
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @description makes a call to the loadUserService
 * onSuccess: returns the user && sets the statusCode to 200
 * onFailure: returns an http error && sets the statusCode to 500
 * @return json object
 */
export const loadUser = async (req, res) => {
  try {
    const loadedUser = await loadUserService(req, res);
    res.json({ loadedUser });
  } catch (err) {
    res.json({ success: false, statusCode: 500, message: 'Something went wrong with loading the user' });
  }
};
