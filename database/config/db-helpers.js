const db = require('./db-config.js')

module.exports = {
    getUsers
}

function getUsers () {
    return db('Users')
};