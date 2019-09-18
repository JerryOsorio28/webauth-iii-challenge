//import express
const express = require('express');

//express router
const router = express.Router();

//import helpers
const Users = require('../config/db-helpers');

//<-------------GET REQUESTS--------------------------
router.get('/users', (req, res) => {

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
    
})

router.post('/login', (req, res) => {
    
});

module.exports = router;
