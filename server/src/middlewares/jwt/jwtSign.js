import jwt from 'jsonwebtoken';

// Todo: Send the token as a header
export const jwtSign = (payload) => {
  return jwt.sign(
    payload.user,
    process.env.JWT_SECRET,
    { expiresIn: '7 days' }
  );
}