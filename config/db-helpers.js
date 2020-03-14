const db = require('./db-config.js')

module.exports = {
    getUsers,
    addUser,
    getUser
}

function getUsers () {
    return db('Users')
};

function addUser (data) {
    return db('Users')
        .insert(data)
}

function getUser (user) {
    return db('Users')
        .where(user)
        .first()
}