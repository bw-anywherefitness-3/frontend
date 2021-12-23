import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Register (props) {
    const {
        values, 
        submit,
        change, 
        errors,
        disabled
    } = props

    const history = useHistory()

    const routeToLogin = () => {
        history.push('/');
    }

    const onSubmit = e => {
        e.preventDefault()

        submit()
    }

    const onChange = (e, v) => {
        const { name, value, type } = e.target
        const valueToUse = type === 'radio' ? v : value;
        change(name, valueToUse)
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
                        value={values.role}
                        onChange={e => onChange(e, 'Client')}
                        />
                    </label>
                    <label>Instructor
                        <input 
                        type='radio'
                        name='role'
                        value={values.role}
                        onChange={e => onChange(e, 'Instructor')}
                        />
                    </label>
                </div>

                <button disabled={disabled} onSubmit={routeToLogin}>Submit</button>

            </div>
        </form>
    )
}