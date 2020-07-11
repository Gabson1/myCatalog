import axios from 'axios';

export const loginUserRequest = async (email, password) => {
  try {
    return await axios.post('http://localhost:5000/api/users/login', { email, password })
  } catch (err) {
    throw new Error(`Something went wrong... ${err.message}`);
  }
};