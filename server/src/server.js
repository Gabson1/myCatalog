import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import connectDb from './db';

import authRouter from './router/authRouter';
import userRouter from './router/userRouter';
import catalogRouter from './router/catalogRouter';

// Require dotenv to use environment variables everywhere in ./server/**
require('dotenv').config()

// -------------------- Set variables -------------------- //
const server = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

// -------------------- Connect to mongoDB and run node server -------------------- //
server.listen(port, async () => {
	try {
		await connectDb(process.env.MONGO_URI);
		console.log(`SERVER IS ALIVE >>> http://${host}:${port}`);
	} catch (err) {
		console.log('There was a problem connecting to the DB and/or running the node server', err);
	}
});

// -------------------- Initialize middlewares -------------------- //
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(cors());
server.use(morgan('dev'));

// -------------------- Server router -------------------- //
server.use('/api/auth', authRouter);
server.use('/api/user', userRouter);
server.use('/api/catalog', catalogRouter);
// server.use('/api/api', apiRouter);

// -------------------- if node environment is production, make node serve static files -------------------- //
const pathToIndexFile = path.join(__dirname, '..', 'client', 'build', 'index.html')
if (process.env.NODE_ENV === 'production') {
	server.use(express.static(path.join(__dirname, '..', '..', 'client', 'src', 'assets')));
	server.use(express.static(path.join(__dirname, '..', '..', 'client', 'public')));

	server.get('*', (req, res) => {
		res.sendFile(pathToIndexFile);
	});
}
