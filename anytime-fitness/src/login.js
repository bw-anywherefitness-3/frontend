import React from 'react'
import photo from './Photos/gym.jpg'

const LoginDiv = styled.div`

`


export default function Login(props){

const {values, change} = props

const onChange = (evt, v) => {
    const { name, value, type } = evt.target
    const valueToUse = type === 'radio' ? v : value
    change(name, valueToUse)
}

return (
    <LoginDiv>
    <div className='login-container'>
<form id='login-form'>
    <div className='login'>
<label>Email:
    <input 
    value={values.email}
    onChange={onChange}
    name='email'
    id='email-input'
    type='text'
    placeholder='JohnDoe1234@yahoo.com'
    />
</label>
    </div>
    <div className='password'>
        <label>Password:
            <input 
            value={values.password}
            name='password'
            id='password-input'
            type='password'
            placeholder='Password'
            onChange={onChange}
            />
        </label>
    </div>
    <div className='radio-buttons'>
        <label>Client
        <input 
        type='radio'
        name='role'
        value={values.role}
        onChange={onChange}
        />
        </label>
        <label>Instructor
        <input 
        type='radio'
        name='role'
        value={values.role}
        onChange={onChange}
        />
        </label>
    </div>
</form>
</div>
</LoginDiv>
)
}