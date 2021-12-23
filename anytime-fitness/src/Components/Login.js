import React from 'react'
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom';

const LoginDiv = styled.div`
background-color: white;
opacity: 0.9;
color: black;
width: 40%;
padding: 4% 2%;
display: flex;
flex-direction: column;
margin-left: 27%;
margin-top: 6%;
padding-top: 1%;
h1{
    font-size: 2rem;
    margin-bottom: 5%;
}
.login{
    margin-bottom: 4%;
}
.password{
    margin-bottom: 4%;
    margin-right: 6%;
}
#email-input{
    margin-left:8px;
}
#password-input{
    margin-left: 2%;
}
.client{
    padding: 5%;
}
.submit{
    border: 2px black solid;
    border-radius: 20px;
    background: black;
    color: white;
}
.register{
    border: 2px black solid;
    border-radius: 20px;
    background: black;
    
}
.nav-links{
    text-decoration: none;
    color: white;
    font-size: 20px;
    padding: 2%;
    display: flex;
    justify-content: space-around;
    
    
}
`

export default function Login(props){

const {values, change} = props

const onChange = (evt, v) => {
    const { name, value, type } = evt.target
    const valueToUse = type === 'radio' ? v : value
    change(name, valueToUse)
}

return (
    
    <LoginDiv className='login-container'>
        <h1>Login</h1>
<form id='login-form'>
    <div className='email'>
<label>Email:
    <input 
    value={values.email}
    onChange={onChange}
    name='email'
    id='email-input'
    type='text'
    placeholder='John@email.com'
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
        <label className='client'>Client
        <input 
        type='radio'
        name='role'
        value={values.role}
        onChange={onChange}
        />
        </label>
        <label className='instructor'>Instructor
        <input 
        type='radio'
        name='role'
        value={values.role}
        onChange={onChange}
        />
        </label>
    </div>
    <div className='nav-links'>
      <Link className='nav-links submit' to='/'>Submit</Link>
      <Link className='nav-links register' to='/register'>Register</Link>    
    </div>
</form>
</LoginDiv>

)
}