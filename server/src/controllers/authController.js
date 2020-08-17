import { createUserService, loginUserService } from '../services';
import { setHeader } from '../utils/setHeader';

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
export const signupUser = async (res, req) => {
	try {
		// Call the createUserService
		await createUserService(res, req.body);

		// Set the statusCode too 200 and the contentType to application/json
		setHeader(res, 200);

		// Send a json success message
		res.json({ success: true, message: 'Registration Successful!' });

	} catch (error) {
		// Set the statusCode too 500 and the contentType to application/json
		setHeader(res, 500);

		// If anything goes wrong, return a json error
		res.json({ error });
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
export const loginUser = async (res, req) => {
	try {
		// Call the loginUserService
		await loginUserService(res, req.body);

		// Set the statusCode too 200 and the contentType to application/json
		setHeader(res, 200)

		// Send a json success message
		res.json({ success: true, message: `${req.body.email} has successfully logged in` });
	} catch (error) {
		// Set the statusCode too 500 and the contentType to application/json
		setHeader(res, 401)

		// If anything goes wrong, return a json error
		res.json({ error });
	}
};
