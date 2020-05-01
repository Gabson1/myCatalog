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

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, host, (err: any) => {
    (err) ? console.log('Error:', err) : console.info(`>>> Server is up and running... ${host}:${port}`);
});


// TODO: Add logic for routing
// TODO: Initialize authorization
