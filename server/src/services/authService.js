import User from '../models/userModel';

export const loadUserService = async (req, res) => {
  try {
    // First find the user by id and return it as the user object (not including password)
    const user = await User.findById(req.user.id).select('-password');

    // If no user is found return an error
    if (!user) return res.status(400).json({ errors: [{ msg: 'User does not exist' }] });

    // Return the user as a json object
    return {
      statusCode: 200,
      success: true,
      message: 'User found',
      user,
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
