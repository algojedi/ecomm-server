const Session = require('../models/Session')
const express = require('express')
const router = express.Router()

module.exports = (req, res, next) => {
    const { authorization } = req.headers //authorization is the token
    if (!authorization) {
        console.log('no auth token')
        return next() // user will not be able to access all routes
    }

    //save userid on req object if there's a token
    //    console.log(authorization)
    Session.findOne({ authorization }).then((userId) => {
        //   if (err || !reply) {
        //     console.log("issue with token", err);
        //     return res.status(400).json("Authorization denied");
        //   }
        //     console.log('reply from redis in middleware', reply)
        //   req.userId = JSON.parse(reply);
        console.log("response after session lookup, ", userId )
        if (userId) { req.userId = 123}
        next()
    })
    .catch(err => console.log('err with session middleware ', err.message))

}
