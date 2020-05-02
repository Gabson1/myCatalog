const knexConfig = {
  client: 'pq',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  },
  pool: { min: 0, max: 7 },
  migrations: {
    tableName: process.env.DB_MIGRATIONS
  }
};

module.exports = knexConfig;

export default knexConfig;
