import User from '../models/userModel';

export const loadUserService = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    if (!user) next(res.status(400).json({ errors: [{ msg: 'User does not exist' }] }));

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};
