import Users from '../models/userModel';
import { createUserService } from '../services/userService';

// Get all users
export const getAllUsers = async (req, res, next) => {
  const allUsers = await Users.find({}, "-password"); // Omit password
  console.log(allUsers);
  res.json({ data: allUsers });
};

// Signup a user
export const createUser = async (req, res) => {
  const newUser = await createUserService(req.body);
  res.status(201).json({ newUser });
};

// Login a user
export const loginUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await Users.findOne({ email });
  res.json({ message: `${user.name} has successfully logged in` });
};

