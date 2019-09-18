//import .env file asap in your code
require('dotenv').config();

//import server
const server = require('./server');

//import defaults to grab your dynamic port
const defaults = require('./database/config/defaults');

//create dynamic port
const port = defaults.port;

//have server listen in dymamic port
server.listen(port, (req, res) => {
    console.log(`Server making magic in port ${port}`)
})
