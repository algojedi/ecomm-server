
import React from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-btn/custom-btn'
import { useForm } from 'react-hook-form'
import './register.scss'
import { asyncRegister } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {
    const {register, handleSubmit, errors} = useForm();
    const { registerErrorMsg } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const onSubmit = data => {
        const {email, password, fname, lname} = data
        const name = `${fname} ${lname}`
        dispatch(asyncRegister({ email, password, name }))
    }

        return (
            <div className='register'>
                <h1>Create New Account</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput reference={register}
                        name='fname'
                        type='text'
                        label='first name'
                        required
                    />
                    <FormInput reference={register}
                        name='lname'
                        type='text'
                        label='last name'
                        required
                    />
                    <FormInput reference={register}
                        name='email'
                        type='email'
                        label='email'
                        required
                    />
                    <FormInput
                    reference={register({ required: "Password must be at least 4 characters", minLength: 4 })}
                        name='password'
                        type='password'
                        label='password'
                        required
                    />
                    {errors.password && errors.password.type === 'minLength' && <p className="err-msg">Password must be at least 4 characters</p>}
                    <CustomButton type='submit' inverse="true" >Register</CustomButton>
                </form>
                <div className="err-msg">
                    { registerErrorMsg ? registerErrorMsg : null}
                </div>
            </div>
        )
}

export default Register
