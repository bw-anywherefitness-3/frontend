<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

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
=======
import React from 'react';
import { useHistory } from "react-router-dom"; 
>>>>>>> 652d87f73dcfbd88cbd4d3a5ec03ebd8beac9810

export default function Login(props){

const {values, change} = props
<<<<<<< HEAD
=======
const history = useHistory()
>>>>>>> 652d87f73dcfbd88cbd4d3a5ec03ebd8beac9810

const onChange = (evt, v) => {
    const { name, value, type } = evt.target
    const valueToUse = type === 'radio' ? v : value
    change(name, valueToUse)
}

<<<<<<< HEAD
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
=======
const routeToUserHome = () => {
    history.push('/userhome');
}

return (
    <div className='login-container'>
<form id='login-form'>
    <div className='login'>
<label>Login:
    <input 
    name='email'
    id='email-input'
    type='text'
    placeholder='Enter your email here.'
    value={values.email}
    onChange={onChange}
>>>>>>> 652d87f73dcfbd88cbd4d3a5ec03ebd8beac9810
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
<<<<<<< HEAD
        <label className='client'>Client
=======
        <label>Client
>>>>>>> 652d87f73dcfbd88cbd4d3a5ec03ebd8beac9810
        <input 
        type='radio'
        name='role'
        value={values.role}
        onChange={onChange}
        />
        </label>
<<<<<<< HEAD
        <label className='instructor'>Instructor
=======
        <label>Instructor
>>>>>>> 652d87f73dcfbd88cbd4d3a5ec03ebd8beac9810
        <input 
        type='radio'
        name='role'
        value={values.role}
        onChange={onChange}
        />
        </label>
<<<<<<< HEAD
    </div>
    <div className='nav-links'>
      <Link className='nav-links submit' to='/'>Submit</Link>
      <div className='bottom'>
      <h4>Don't have an account?</h4>
      <Link className='nav-links register' to='/register'>Join us!</Link>    
    </div>
    </div>
</form>

</LoginDiv>

=======
        <button onClick={routeToUserHome}>Login</button>
    </div>
</form>
</div>
>>>>>>> 652d87f73dcfbd88cbd4d3a5ec03ebd8beac9810
)
}