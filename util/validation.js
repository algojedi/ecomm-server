const User = require('../models/User')
const passwordValidator = require('password-validator')
const bcrypt = require('bcrypt')

//a function that checks if username/password matches a registered user
//on success, returns the user
const handleSignIn = async (email, password) => {
    console.log('am i getting inside handlesignin?')
    if (!email || !password) {
        return { success: false, data: 'email/password are required fields' }
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return { success: false, data: `no user registered with ${email} ` }
        }
        const userId = user.id // 'friendly' version of mongo Object Id
        const isCorrectPassword = await bcrypt.compare(password, user.password)
        return isCorrectPassword
            ? { success: true, data: { ...user._doc, id: userId} }
            : { success: false, data: 'incorrect password' }
    } catch (err) {
        return { success: false, data: err.message }
    }
}

const validateRegistration = async (name, email, password) => {
    if (!email || !password || !name) {
        return {
            success: false,
            data: 'email/password/name are required fields',
        }
    }

    const schema = new passwordValidator()
    // set properties to schema validator
    schema.is().min(4)
    schema.is().max(20)
    schema.has().not().spaces()
    if (!schema.validate(password)) {
        return { success: false, data: 'invalid password' }
    }
    try {
        const user = await User.findOne({ email })
        if (user) {
            return {
                success: false,
                data: `user already exists with ${email} `,
            }
        }
        return { success: true, data: 'success' }
    } catch (err) {
        console.error('error trying to validate: ', err.message)
        return { success: false, data: 'oops.. something went wrong' }
    }
}

// precondition: arguments are assumed valid
const registerUser = async (name, email, password) => {
    try {
        const salt = 12
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = new User({
            name,
            password: hashedPassword,
            email,
        })
        const savedUser = await user.save()
        console.log('the saved user: ', savedUser)
        return { success: true, data: savedUser.id }
    } catch (err) {
        console.log('error registering user: ', err.message)
        return { success: false, data: 'error saving user to database' }
    }
}

module.exports = { handleSignIn, validateRegistration, registerUser }
