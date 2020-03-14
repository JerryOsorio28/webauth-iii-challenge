const jwt = require('jsonwebtoken'); //JSON web token dependency
const secrets = require('../config/secrets')

module.exports = (req, res, next) => {
    
    const token = req.headers.authorization; //grabs the token from header

    if(token){
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if(err) {
                //expired token
                res.status(401).json({ message: 'Invalid credentials' })
            } else {
                next(); // token is good
                req.user = { username: decodedToken.username }
            }
        })
    } else {
        res.status(400).json({ message: 'No credentials provided' })
    }
};