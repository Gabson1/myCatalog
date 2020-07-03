import axios from 'axios';

export const loginEffect = async (email, password) => {
  try {
    return axios.post('/api/users/login', {
      email: email,
      password: password
    })
  } catch (err) {
    throw new Error(err.message);
  }
};