import jwt from 'jsonwebtoken';

// jwtVerify checks whether a user has a valid token or not
// this method is added to
export const jwtVerify = (req) => {
  console.log('req:', req);
  const jwtToken = req.token

  jwt.verify(jwtToken, process.env.JWT_SECRET);
};