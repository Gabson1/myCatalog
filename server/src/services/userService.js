import User from '../models/userModel';

export const findUserByIdService = async (req, res) => {
  // funcName is used for debugging purposes
  const funcName = 'findUserByIdService';
  try {
    // First find the user by id and return it as the user object (not including password)
    const user = await User.findById(req.user.id).select('-password');

    // If no user is found return an error
    if (!user) return res.status(400).json({ errors: [{ msg: 'User does not exist' }] });

    // Return the user as a json object
    res.json(user);

    // If anything goes wrong, return a server error
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`Server Error: ${funcName}`);
  }
}
