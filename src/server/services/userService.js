import httpError from '../middlewares/httpErrorMiddleware';
import Users from '../models/userModel';

export const createUserService = async ({ name, email, password }) => {
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
    name,
    email,
    password,
    image: "https://picsum.photos/200",
    places: [],
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
