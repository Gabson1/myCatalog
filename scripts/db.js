const Knex = require('knex');
const knexConfig = require('./db/knexConfig')

module.exports = (opt = knexConfig) => Knex(opt);
