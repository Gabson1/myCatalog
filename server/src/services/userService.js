import jwt from 'jsonwebtoken';

import User from '../models/userModel';
import { jwtVerify } from "../middlewares";

export const findUserByIdService = async (req, res, cookies) => {
  // funcName is used for debugging purposes
  const funcName = 'findUserByIdService';
  try {
    await jwtVerify(cookies['jwt']);
    return await User.findById(req.user.id).select('-password');
  } catch (error) {
    throw new Error(`${funcName} Something went wrong`);
  }
}