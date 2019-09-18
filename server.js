//import express dependency
const express = require('express');

//assign your server to use express dependency
const server = express();

//teach express to parse the body's data to JSON
server.use(express.json());

//import endpoints
const endpoints = require('./database/enpoints/endpoints.js')
server.use('/api', endpoints)

//Dummy endpoint
server.get('/', (req, res) => {
    res.send('Server is up and running :)')   
})


//export server
module.exports = server;