import jwt from 'jsonwebtoken';

import User from '../models/userModel';
import { createUserService, loginUserService } from '../services/userService';

// Get all users
export const getAllUsers = async (req, res) => {
	const allUsers = await User.find({}, '-password'); // Omit password
	res.json({ data: allUsers });
};

// Signup a user
export const createUser = async (req, res) => {
	const newUser = await createUserService(req.body);
	res.status(201).json({ newUser });
};

// Logout a user
export const signoutUser = async (req, res) => {
	req.logout();
	if (req.xhr) return res.status(204).end();
	return res.redirect('/');
};

// Login a user
export const loginUser = async (req, res) => {
	try {
		const user = await loginUserService(req.body);
		res.status(200).json({ message: `${user.email} has successfully logged in` });
		return user;
	} catch (err) {
		res.status(401).json('Unauthorized access');
	}
};

// Validate the user's token at page load
export const validateUserToken = async (req, res, next) => {
	// Get token from header
	const token = req.header('x-auth-token');

	// Check if not token
	if (!token) {
		return res.status(401).json({ msg: 'No token, authorization denied' });
	}

	// Verify token
	try {
		jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
			if (error) {
				return res.status(401).json({ msg: 'Token is not valid' });
			} else {
				req.user = decoded.user;
				next();
			}
		});
	} catch (err) {
		console.error('something wrong with auth middleware');
		res.status(500).json({ msg: 'Server Error' });
	}
}
