import path from 'path';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute';

require('dotenv').config()

const server = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';


server.use(morgan('dev'));

server.use(cors());

server.use(express.static(path.join(__dirname, '../../client/public')));
server.use(express.static(path.join(__dirname, '../../client/src/assets')));

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use('/api/users', userRouter);

server.get('/', (req, res) => {
	res.send('Express is running');
});

// DB connection and Server starting
mongoose
	.connect(
		process.env.MONGO_URI,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => {
		console.log('Connected to the database through Mongoose!');

		server.listen(port, () => {
			console.log(`SERVER IS ALIVE >>> http://${host}:${port}`);
		});
	})
	.catch((error) => console.log(`Error: ${error.message}`));