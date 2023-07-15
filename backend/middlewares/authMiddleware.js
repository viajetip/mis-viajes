const jwt  = require("jsonwebtoken");
require('dotenv').config();

module.exports = function(req, res, next) {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        //console.log('✅', process.env.USER_KEY);
        jwt.verify(token, process.env.USER_KEY, (err, user) => {
            if(err) {
                return res.status(403).json({msg:"Token is not valid!", status: 403});
            }
            req.user = user;
            next();
        });
    } else {
        res.status(500).json({msg:"You are not authenticated!"});
        return
    }
}