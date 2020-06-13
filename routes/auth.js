const express = require('express')
const Session = require('../models/Session')
const {
    handleSignIn,
    validateRegistration,
    registerUser,
} = require('../util/validation')

const router = express.Router()

router.post('/login', async (req, res, next) => {
    console.log('attempting login')
    const { authorization } = req.headers
    const { email, password } = req.body

    // note: users already logged in should not be trying access this route
    if (req.userId) {
        return res.json({
            success: true,
            userId: req.userId, // set in middleware
            token: authorization,
        })
    }

    //no auth token
    try {
        const userValidation = await handleSignIn(email, password) //handleSignIn validates login info
        const { success, data } = userValidation
        if (!success) {
            return res
                .status(400)
                .json({ success: false, error: 'no such user' })
        }
        const { user } = data // user object only available on successful validation
        const token = await createSession(user) // sessionInfo will return null on fail
        console.log('response token from session creation: ', token)
        return token
            ? res.status(200).json({
                  success: true,
                  userId: user.id, // using mongo's convenient version of _id
                  token,
              })
            : res
                  .status(400)
                  .json({ success: false, error: 'failed to save session' })
    } catch (err) {
        console.log(err.message)
        return res
            .status(400)
            .json({ success: false, error: 'oops.. something went wrong' })
    }
})

// create the session and return the token or null on failure
const createSession = (user) => {
    //create jwt and user data
    const { _id, email } = user
    const token = signToken(email)

    return new Promise((resolve, reject) => {
        const session = new Session({
            token: _id,
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
        const validationSuccess = await validateRegistration(
            name,
            email,
            password
        )
        if (!validationSuccess.success) {
            return res.status(400).json(validationSuccess)
        }
        const registrationSuccess = await registerUser(name, email, password)
        if (!registrationSuccess.success) {
            return res.status(400).json(registrationSuccess)
        }
        const { user } = registrationSuccess.data
        return res.status(200).json({ success: true, data: user })
    } catch (err) {
        console.error(err.message)
        return {
            success: false,
            data: 'oops.. something went wrong with validation/registration',
        }
    }
})

// router.get('/signup', authController.getSignup)

// router.post('/login', authController.postLogin)

// router.post('/signup', authController.postSignup)

// router.post('/logout', authController.postLogout)

module.exports = router
