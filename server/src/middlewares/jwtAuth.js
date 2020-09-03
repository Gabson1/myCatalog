import jwt from 'jsonwebtoken';

export const jwtSign = (payload) => jwt.sign(
  payload.user,
  process.env.JWT_SECRET,
  { expiresIn: '7 days' },
);

export const jwtVerify = (res) => { jwt.verify(res.headers.authorization, process.env.JWT_SECRET); };
