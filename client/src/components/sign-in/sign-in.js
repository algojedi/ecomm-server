import React from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-btn/custom-btn'
import { useForm } from 'react-hook-form'
import './sign-in.scss'
import { useDispatch, useSelector } from 'react-redux'
import { asyncSignIn } from '../../redux/actions/actions'

const SignIn = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm()
    const { errorMsg } = useSelector((state) => state.user)

    const onSubmit = (data) => {
        dispatch(asyncSignIn(data))
    }

    return (
        <div className='sign-in'>
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    reference={register}
                    name='email'
                    type='email'
                    label='email'
                    required
                />
                <FormInput
                    reference={register({
                        required: 'Password must be at least 4 characters',
                        minLength: 4,
                    })}
                    name='password'
                    type='password'
                    label='password'
                    required
                />
                {errors.password && errors.password.type === 'minLength' && (
                    <p className='err-msg'>Invalid password</p>
                )}
                <div className='form-btn-container'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                </div>
            </form>
            <div className='err-msg'>{errorMsg ? errorMsg : null}</div>
        </div>
    )
}

export default SignIn
