import httpError from '../utils/httpError';
import Users from '../models/user.mod';

export const createUserService = async ({ username, email, password }) => {
  let userExist;
  try {
    userExist = await Users.findOne({ email });
  } catch (err) {
    const error = new httpError("Could not sign up, please try again", 500);
    return next(error);
  }

  if (userExist) {
    return new httpError("User already exists, log in instead.");
  }

  const newUser = new Users({
    username,
    email,
    password,
    avatar: "https://picsum.photos/200",
    tables: [],
  });

  try {
    return newUser.save();
  } catch (err) {
    const error = new httpError(
      "Creating new user failed! Please try again.",
      500
    );
    return next(error);
  }
};
