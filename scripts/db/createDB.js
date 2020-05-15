const knexConfig = require('./knexConfig');
const dbName = knexConfig.connection.database;

let conf = {
  ...knexConfig,
  connection: {
    ...knexConfig.connection,
    database: 'postgres',
  }
}
const db = require('../db')(conf);

db.raw(`CREATE DATABASE ${dbName}`).then(
  () => {
    console.log('Database was created.');
    db.destroy();
  },
  (error) => {
    console.error('Error! Creating the Database failed.');
    console.error(error);
    db.destroy();
  },
);
