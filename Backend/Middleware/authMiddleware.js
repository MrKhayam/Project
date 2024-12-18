const jwt = require('jsonwebtoken');
const ansyncHandler = require('express-async-handler');
const User = require("../Models/userModel");


const authMiddleware = ansyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            req.user = await User.findById(decode.Id);
            next();
        } catch (error) {
            throw new Error("Wrong Token");
        }
    } else {
        throw new Error("No Token Found");
    }
})

module.exports = authMiddleware;