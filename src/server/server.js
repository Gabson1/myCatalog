import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import ServerRouter from './routes/index';

const app  = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST_NAME || 'localhost';

app.use(morgan('dev'));

// app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});

app.use('/api/users');

mongoose
  .connect(
    "mongodb+srv://gabriel:Gsr_281297@cluster0-6nzoo.mongodb.net/mycatalog?retryWrites=true&w=majority\";",
    {useNewUrlParser: true, useUnifiedTopology: true}
  ).then(() => { console.log("Connected to the database through Mongoose!");

      app.listen(port, () => {
          console.log(`SERVER IS ALIVE >>> http://${host}:${port}`);
      });
  }).catch((error) => console.log(`Error: ${error}`));

// TODO: Add logic for routing
// TODO: Initialize authorization