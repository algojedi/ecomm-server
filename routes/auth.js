const express = require('express')
const Session = require('../models/Session')
const jwt = require("jsonwebtoken")
const {
    handleSignIn,
    validateRegistration,
    registerUser,
} = require('../util/validation')

const router = express.Router()

router.post('/login', async (req, res) => {
    console.log('attempting login')
    const { authorization } = req.headers
    const { email, password } = req.body;

    // note: users already logged in should not be trying access this route
    // this handles the anamoly
    if (req.userId) {
        return res.json({
            token: authorization,
        })
    }

    //no auth token
    try {
        const getUser = await handleSignIn(req.body.email, password) //handleSignIn validates login info
        const { success, data } = getUser
        if (!success) {
            return res
                .status(400)
                .send('no such user')
        }
        // user in data object should have { email, id }
        const { id, email } = data // user object only available on successful validation
        const token = await createSession(id, email) // sessionInfo will return null on fail
        console.log('response token from session creation: ', token)
        return token
            ? res.status(200).json({
                //   userId: user.id, // using mongo's convenient version of _id
                  token,
              })
            : res
                  .status(400)
                  .send('failed to save session' )
    } catch (err) {
        console.log(err)
        return res
            .status(400)
            .send( 'oops.. something went wrong' )
    }
})

// create the session and return the token or null on failure
const createSession = (id, email) => {
    //create jwt and user data
    const token = signToken(email)

    return new Promise((resolve, reject) => {
        const session = new Session({
            token: id,
        })
        session
            .save()
            .then((result) => {
                resolve(token)
            })
            .catch((err) => {
                console.error(err.message)
                reject(null)
            })
    })
}

const signToken = (email) => {
    const jwtPayload = { email }
    return jwt.sign(jwtPayload, process.env.JWTSECRET, {
        expiresIn: '2 days',
    })
}

router.post('/register', async (req, res, next) => {
    const { name, email, password } = req.body

    try {
        const validationResult = await validateRegistration(
            name,
            email,
            password
        )
        if (!validationResult.success) {
            return res.status(400).json(validationResult.data)
        }
        const registrationResult = await registerUser(name, email, password)
        if (!registrationResult.success) {
            return res.status(400).json(registrationResult.data)
        }
        return res.status(200).json(registrationResult.data) // returns newly created user id
    } catch (err) {
        console.error(err.message)
        return res.status(400).json('oops.. something went wrong with validation/registration')
    }
})

// router.get('/signup', authController.getSignup)

// router.post('/login', authController.postLogin)

// router.post('/signup', authController.postSignup)

// router.post('/logout', authController.postLogout)

module.exports = router
