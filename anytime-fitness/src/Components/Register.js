import React from 'react';
import styled from 'styled-components';
import photo from '../Photos/red.jpg'

const RegisterDiv = styled.div`
background: white;
color: black;
.name{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
padding: 60px 0;
`


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

    const onChange = (e, v) => {
        const { name, value, type } = e.target
        const valueToUse = type === 'radio' ? v : value;
        change(name, valueToUse)
    }

    return (
        <RegisterDiv>
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
                        placeholder='John'
                        value={values.firstName}
                        onChange={onChange}
                        />
                    </label> 
                    <label>Last Name:
                        <input
                        type='text'
                        name='lastName'
                        placeholder='Doe'
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
                        placeholder='JohnDoe1234@yahoo.com'
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
                        placeholder='Password1234!'
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

                <button>Submit</button>

            </div>
        </form>
        </RegisterDiv>
    )
}