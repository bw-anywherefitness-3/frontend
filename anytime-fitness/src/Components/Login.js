import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

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
.email{
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
.nav-links .submit{
    border: 2px black solid;
    border-radius: 10px;
    background: black;
    color: white;
    width: 15%;
    margin-left: 40%;
    padding: 1%;
    font-size: 1rem;
}
.nav-links .register{
    color: black;
    margin-top: 4%;
    border: 1px solid black;
    border-radius: 10px;
    margin-left: 2%;
    font-size: 1rem;
    display: flex;
    align-items: center;
    padding: 1%;
}
.nav-links{
    text-decoration: none;
    padding: 2%;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
}
h4{
    font-weight: 2;
    margin-bottom: 0;
    font-size: 1rem;
}
.bottom{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
`

export default function Login(props){

const {values, submit, change} = props

const onChange = (evt, v) => {
    const { name, value, type } = evt.target
    const valueToUse = type === 'radio' ? v : value
    change(name, valueToUse)
}

const history = useHistory()
const send = () => {
    history.push('/register')
}

const onSubmit = evt => {
    evt.preventDefault()
    submit()
    send()
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
      <button>Submit</button>
      <div className='bottom'>
      <h4>Don't have an account?</h4>
      <button onClick={onSubmit}>Join us!</button>
    </div>
    </div>
</form>

</LoginDiv>

)
}