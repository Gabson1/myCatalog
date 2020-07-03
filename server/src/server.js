import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute';

const server = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST_NAME || 'localhost';

server.use(morgan('dev'));

server.use(cors());

// server.use(express.static('public'))

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use('/api/users', userRouter);

server.get('/', (req, res) => {
  res.send('Express is running');
});

server.use('/api/users', userRouter);

// DB connection and Server starting
mongoose
  .connect(
    'mongodb+srv://ivantembe:rWcx4ckn34ObMaTL@node-api-vriow.mongodb.net/products-db?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to the database through Mongoose!');

    server.listen(port, () => {
      console.log(`SERVER IS ALIVE >>> http://${host}:${port}`);
    });
  })
  .catch((error) => console.log(`Error: ${error}`));