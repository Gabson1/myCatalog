import jwt from 'jsonwebtoken';

// isAuthenticated checks whether a user has a valid token or not
// this method is added to
export const isAuthenticated = (req) => {
  console.log('req:', req);
  const jwtToken = req.token

  jwt.verify(jwtToken, process.env.JWT_SECRET);
};