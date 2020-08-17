import jwt from 'jsonwebtoken';

export const jwtSign = (payload, res) => {
  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: '7 days' },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
}