//import knex depencency
const knex = require('knex');

//import knexFile
const knexFile = require('../../knexfile')

//target development property on your knexFile
const knexConfig = knexFile.development;

//export knexConfig
module.exports = knex(knexConfig)