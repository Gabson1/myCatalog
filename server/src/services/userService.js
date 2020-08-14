import httpError from '../utils/http-error';
import User from '../models/userModel';
import bcrypt from 'bcrypt';

export const createUserService = async ({ username, email, password }) => {
	const funcName = 'createUserService';
	let userExist;
	try {
		userExist = await User.findOne({ email });
	} catch (err) {
		const error = new httpError(`${funcName}: Something went wrong`, 500);
		return next(error);
	}

	if (userExist) {
		return new httpError(`${funcName}: User already exists.`);
	}

	const salt = await bcrypt.genSalt(10);
	password = await bcrypt.hash(password, salt);

	const newUser = new User({
		username,
		email,
		password,
		image: 'https://picsum.photos/200',
		catalogs: [],
	});

	console.log('newUser: ', newUser);

	try {
		return newUser.save();
	} catch (err) {
		const error = new httpError(`${funcName}: Creating new user failed! Please try again.`, 500);
		return next(error);
	}
};

export const loginUserService = async ({ email, password }) => {
	const funcName = 'loginUserService';
	try {
		const user = await User.findOne({ email });
		const match = await bcrypt.compare(password, user.password);
		if(match) return user;
		else throw new Error('Password does not match');
	} catch(err) {
		throw new Error(`${funcName} Something went wrong`);
	}
};
