import * as express from 'express';
import * as morgan from 'morgan';
import ServerRouter from './routes/index';

const app  = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST_NAME || 'localhost';

app.use(morgan('dev'));

// app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get('/', (_req, res) => res.send('Hello World!'))

app.get('/secret', (_req, res) => res.send('You are not supposed to be here buddy!'))

app.listen(port, host, (err) => {
    (err) ? console.log('Error:', err) : console.info(`>>> SERVER IS TRYING TO RUN AWAY: http://${host}:${port}`);
});


// TODO: Add logic for routing
// TODO: Initialize authorization
