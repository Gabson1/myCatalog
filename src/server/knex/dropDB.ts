import Knex from 'knex';
import knexConfig from './knexfile';

const dbName = process.env.DB_NAME;
const knex = Knex(knexConfig);

knex.raw('select pg_terminate_backend(pid) from pg_stat_activity where datname=\'' + dbName + '\'')
    .then(() => {
        knex.raw(`DROP DATABASE ${dbName}`)
            .then(
                () => {
                    console.log('Database was dropped.');
                    knex.destroy();
                },
                (error) => {
                    console.error('Error! Dropping the Database failed.');
                    console.error(error);
                    knex.destroy();
                }
            );
    });
