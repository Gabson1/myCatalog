import Knex from 'knex';
import knexConfig from './knexfile';

const dbName = process.env.DB_NAME;
const knex = Knex(knexConfig);

knex.raw(`CREATE DATABASE ${dbName}`).then(
    () => {
        console.log('Database was created.');
        knex.destroy();
    },
    (error) => {
        console.error('Error! Creating the Database failed.');
        console.error(error);
        knex.destroy();
    },
);
