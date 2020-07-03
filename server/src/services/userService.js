import httpError from '../utils/http-error';
import User from '../models/userModel';

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

  const newUser = new User({
    username,
    email,
    password,
    image: 'https://picsum.photos/200',
    places: [],
  });

  console.log(newUser);

  try {
    return newUser.save();
  } catch (err) {
    const error = new httpError(`${funcName}: Creating new user failed! Please try again.`, 500);
    return next(error);
  }
};
