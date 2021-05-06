const { options } = require('../db-connect-data/sqlLite');
const knex = require('knex')(options);
const createTables = require('./sql/createTables')(knex);
const queries = require('./sql/queries')(knex);

module.exports = queries;