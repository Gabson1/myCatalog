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


db.raw(`select pg_terminate_backend(pid) from pg_stat_activity where datname='${dbName}'`)
  .then(() => {
    db.raw(`DROP DATABASE ${dbName}`)
      .then(
        () => {
          console.log('Database was dropped.');
          db.destroy();
        },
        (error) => {
          console.error('Error! Dropping the Database failed.');
          console.error(error);
          db.destroy();
        }
      );
  })
