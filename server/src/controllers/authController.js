import { createUserService, loginUserService } from '../services';
import { setStatusHeader } from '../utils/setStatusHeader';

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
		const token = await createUserService(res, req.body);

		// Send a json success message
		res.json({ success: true, message: 'Registration successful!', token: token });
	} catch (error) {
		// If anything goes wrong, return a json error
		res.json({ statusCode: 500, message: error, contentType: 'application/json' });
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
		const token = await loginUserService(res, req.body);

		// Send a json success message
		res.json({ success: true, message: `${req.body.email} has successfully logged in`, token: token });
	} catch (error) {
		// If anything goes wrong, return a json error
		res.json({ statusCode: 500, message: error, contentType: 'application/json' });
	}
};
