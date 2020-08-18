import jwt from 'jsonwebtoken';

export const jwtSign = (payload) => {
  return jwt.sign(
    payload.user,
    process.env.JWT_SECRET,
    { expiresIn: '7 days' }
  );
}