const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) =>{
        //get token from header
        const jwtToken = req.header("token");

        //check if not token
        if(!jwtToken) {
            return res.status(403).json("Not Autorized");
            }
        try {
            const payload = jwt.verify(jwtToken, process.env.jwtSecret);
            req.user = payload.user;
            next();
        } 
        catch (err) {
        console.error(err.message);
        res.status(401).json("Token is not valid");
    }
};