import User from '../models/userModel';
import { createUserService } from '../services/userService';

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

// Login a user
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if(!user) res.status(401).json('Unauthorized access');
  else res.status(200).json({ message: `${user.email} has successfully logged in` });
};

