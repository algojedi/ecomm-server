import React from 'react'

import './form-input.scss'

const FormInput = ({ label, reference, ...otherProps }) => {
    return (
    <div className='form-component'>
       
        <input className='form-component_input' ref={reference} {...otherProps} />
        {label ? (
            <label
                className='shrink form-component_label'
            >
                {label}
            </label>
        ) : null}
    </div>
)}

export default FormInput
