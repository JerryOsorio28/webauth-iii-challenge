const express = require('express'); //import express
const router = express.Router(); //express router
const Users = require('../../config/db-helpers'); //import helpers
const bcrypt = require('bcryptjs'); //import bcrypt library
const verified = require('../../auth/verified-middleware'); //import middlewares
const jwt = require('jsonwebtoken'); //JSON web token dependency
const secrets = require('../../config/secrets.js')




//<-------------GET REQUESTS--------------------------
router.get('/users', verified, (req, res) => {

    Users.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json(err.response)
        })
})

//<-------------POST REQUESTS--------------------------
router.post('/register', (req, res) => {

    const {username, password } = req.body; 

     //This creates a hash for password coming from the body before storing it in the database
     const hash = bcrypt.hashSync(password, 12)
     
    Users.addUser({username, password: hash }) //set hash to password
        .then(user => {
            res.status(200).json({
                message: 'User was added sucessfully',
                user
            })
        })
        .catch(err => {
            res.status(500).json(err.response)
        })
})

router.post('/login', (req, res) => {

    const { username, password } = req.body; 

    Users.getUser({ username })
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome aboard ${user.username}`,
                    token
                })
            } else {
                res.status(404).json({
                    message: `User ${user} not found`
                })
            }
        })
        .catch(err => {
            res.status(500).json(err.response)
        })
})

function generateToken (user) {

    const payload = {
        username: user.username
    }

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;
