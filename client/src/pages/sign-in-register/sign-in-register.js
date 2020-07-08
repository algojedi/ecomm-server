import React from 'react'

import SignIn from '../../components/sign-in/sign-in'
import Register from '../../components/register/register'

import './sign-in-register.scss'

const SignInRegisterPage = () => (
    <div className='sign-in-register'>
        <SignIn className='sign-in-register_sigin-in' />
        <Register className='sign-in-register_register' />

    </div>
)

export default SignInRegisterPage
