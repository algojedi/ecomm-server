const express = require('express')
const Session = require('../models/Session')

// const authController = require('../controllers/auth')

const router = express.Router()

router.post('/login', async (req, res, next) => {
      console.log("attempting login");
    const { authorization } = req.headers
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
        const user = await handleSignIn(req, res) //handleSignIn validates login info

        //if the login info is correct, create session
        if (user && user._id && user.email) {
            sessionInfo = await createSession(user) // sessionInfo will return null on fail
            console.log('response from session creation: ', sessionInfo)
            if (sessionInfo && sessionInfo.token)
                return res.json({
                    success: true,
                    userId: user._id,
                    token: sessionInfo.token,
                })
        } else {
            return res.status(400).json('no such user')
        }
    } catch (err) {
        console.log(err.message)

        return res.status(400).json('oops.. something went wrong')
    }
})

//a function that validates username/password and returns null or fail
//on success, should return the user
const handleSignIn = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return null
    }
    try {
        const user = await User.findOne({ email: email })

        if (!user) {
            return null
        }
        const isCorrectPassword = await bcrypt.compare(password, user.password)
        return isCorrectPassword ? user : null
    } catch (err) {
        console.log('error in handling sign in', err.message)
        return null
    }
}

// create the session and return the token or null
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
                resolve({ token })
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

// router.get('/signup', authController.getSignup)

// router.post('/login', authController.postLogin)

// router.post('/signup', authController.postSignup)

// router.post('/logout', authController.postLogout)

module.exports = router
