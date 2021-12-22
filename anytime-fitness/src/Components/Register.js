import React from 'react';

export default function Register (props) {
    const {
        values, 
        submit,
        change, 
        errors
    } = props

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    const onChange = e => {
        const { name, value, checked, type } = e.target
        const ValueToUse = type === 'radio' ? checked : value;
        change(name, ValueToUse)
    }

    return (
        <form id='register-form' onSubmit={onSubmit}>
            <div className='form'>
                <h2>Create a new Account</h2>
                <div className='errors'>
                    <div>{errors.firstName}</div>
                    <div>{errors.lastName}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.role}</div>
                </div>
                <div className='name'>
                    <label>First Name: 
                        <input
                        type='text'
                        name='firstName'
                        placeholder='What is your first name?'
                        value={values.firstName}
                        onChange={onChange}
                        />
                    </label> 
                    <label>Last Name:
                        <input
                        type='text'
                        name='lastName'
                        placeholder='What is your last name?'
                        value={values.lastName}
                        onChange={onChange} 
                        />
                    </label>
                </div>
                <div className='email'>
                    <label>Email:
                        <input 
                        type='text'
                        name='email'
                        placeholder='What is your email?'
                        value={values.email}
                        onChange={onChange}
                        />
                    </label>
                </div>
                <div className='password'>
                    <label>Password:
                        <input 
                        type='password'
                        name='password'
                        placeholder='Enter your password here'
                        value={values.password}
                        onChange={onChange}
                        />
                    </label>
                </div>
                <div className='role'>
                    <label>Client
                        <input 
                        type='radio'
                        name='role'
                        value='client'
                        onChange={onChange}
                        checked={values.role === 'client'}
                        />
                    </label>
                    <label>Instructor
                        <input 
                        type='radio'
                        name='role'
                        value='instructor'
                        onChange={onChange}
                        checked={values.role === 'instructor'}
                        />
                    </label>
                </div>

                <button>Submit</button>

            </div>
        </form>
    )
}