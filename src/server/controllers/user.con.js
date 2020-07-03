import Users from '../models/user.mod';
import { createUserService } from '../services/index';

// Get all users
export const getAllUsers = async (req, res,) => {
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
export const loginUser = async (req, res) => {
  const { email } = req.body;
  const user = await Users.findOne({ email });
  res.json({ message: `${user.name} has successfully logged in` });
};

