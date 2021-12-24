import React from 'react';
import styled from 'styled-components';
import photo from '../Photos/run.png'
import { useHistory } from 'react-router-dom'
const RegisterDiv = styled.div`
background-color: black;
color: white;
padding: 60px 0;
width: 50%;
opacity: 0.95;
.name{
    display: flex;
    flex-direction: column;
}
.firstName{
    padding: 2%;
}
.first{
  margin-left: 2%;
}
.lastName{
    padding: 2%;
}
.last{
    margin-left: 3%;
}
.email{
    padding: 2%;
}
.mail{
    margin-left: 8%;
}
.password{
    padding: 2%;
}
.pass{
    margin-left: 3%;
}
.role{
    padding: 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;

}
.client{
    padding: 2%;
}
.inst{
    padding: 2%;
}
button{
    border: 2px black solid;
    border-radius: 10px;
    background: black;
    color: white;
    width: 15%;
    padding: 1%;
    font-size: 1rem;
    font-family: 'Staatliches', cursive;
}
`
const RunImg = styled.div`
display: flex;

`


export default function Register (props) {
    const {
        values, 
        submit,
        change, 
        errors,
        disabled
    } = props

    const history = useHistory()

    const routeToDashboard = () => {
        if (values.role === 'client'){
        history.push('/userhome');
        } else if(values.role === 'instructor'){
            history.push('/instructorhome')
        } else {
            history.push('/')
        } 
    }
    


    const routeToLogin = () => {
        history.push('/');
    }


    const onSubmit = e => {
        e.preventDefault()

        submit()
        routeToDashboard()
    }

    const onChange = (e, v) => {
        const { name, value, type } = e.target
        const valueToUse = type === 'radio' ? v : value;
        change(name, valueToUse)
    }

    return (
        <RunImg className='pic'>
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
                <div className='firstName'>
                    <label>First Name: 
                        <input
                        type='text'
                        name='firstName'
                        placeholder='John'
                        value={values.firstName}
                        onChange={onChange}
                        className='first'
                        />
                    </label> 
                    </div>
                    <div className='lastName'>
                    <label>Last Name:
                        <input
                        type='text'
                        name='lastName'
                        placeholder='Doe'
                        value={values.lastName}
                        onChange={onChange} 
                        className='last'
                        />
                    </label>
                </div>
                </div>
                <div className='email'>
                    <label>Email:
                        <input 
                        type='text'
                        name='email'
                        placeholder='John@email.com'
                        value={values.email}
                        onChange={onChange}
                        className='mail'
                        />
                    </label>
                </div>
                <div className='password'>
                    <label>Password:
                        <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={values.password}
                        onChange={onChange}
                        className='pass'
                        />
                    </label>
                </div>
                <div className='role'>
                    <div className='client'>
                    <label>Client
                        <input 
                        type='radio'
                        name='role'
                        value={values.role}
                        onChange={e => onChange(e, 'Client')}
                        />
                    </label>
                    </div>
                    <div className='inst'>
                    <label>Instructor
                        <input 
                        type='radio'
                        name='role'
                        value={values.role}
                        onChange={e => onChange(e, 'Instructor')}
                        />
                    </label>
                    </div>
                </div>

                <button disabled={disabled} onSubmit={routeToLogin}>Submit</button>

            </div>
        </form>
        </RegisterDiv>
       <img src={photo} alt='Man running'/>
       </RunImg>
    )
}