//import express dependency
const express = require('express');

//assign your server to use express dependency
const server = express();

//teach express to parse the body's data to JSON
server.use(express.json());

//Dummy endpoint
server.get('/', (req, res) => {
    res.send(200).json({ message: 'Server is up and running :)' })   
})


//export server
module.exports = server;