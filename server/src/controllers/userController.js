import { createUserService, loginUserService, updateUserProfileService } from '../services';

/**
 * @module signupUser
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @description makes a call to the createUserService
 * onSuccess: returns the newUser object && sets the statusCode to 200
 * onFailure: returns an http error && sets the statusCode to 500
 * @return json object
 */
export const signupUser = async (req, res) => {
  try {
    // Call the createUserService
    const payload = await createUserService(res, req.body);

    // Send a json success message
    res.json({
      statusCode: 200,
      success: true,
      message: 'Registration successful!',
      data: payload,
    });
  } catch (err) {
    // If anything goes wrong, return a json error
    // res.json({ statusCode: error, message: error.msg, contentType: 'application/json' });
    console.log('error: ', err);
  }
};

/**
 * @module loginUser
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @description makes a call to the loginUserService
 * onSuccess: returns the user object && sets the statusCode to 200
 * onFailure: returns an Error && sets the statusCode to 500
 * @return json object
 */
export const loginUser = async (req, res) => {
  try {
    // Call the loginUserService
    const payload = await loginUserService(res, req.body);

    // Send a json success message
    res.json({
      statusCode: 200,
      success: true,
      message: `${req.body.email} has successfully logged in`,
      data: payload,
    });
  } catch (err) {
    // If anything goes wrong, return a json error
    res.json({ statusCode: 500, message: err, contentType: 'application/json' });
  }
};
/**
 * @module loginUser
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @description makes a call to the loginUserService
 * onSuccess: returns the user object && sets the statusCode to 200
 * onFailure: returns an Error && sets the statusCode to 500
 * @return json object
 */
export const updateUserProfile = async (req, res) => {
  try {
    // Call the loginUserService
    const result = await updateUserProfileService(req, res);

    // Send a json success message
    res.json({
      statusCode: result.statusCode,
      success: result.success,
      message: result.message,
      data: result.updatedUser,
    });
  } catch (err) {
    // If anything goes wrong, return a json error
    res.json({ statusCode: 500, message: err, contentType: 'application/json' });
  }
};
