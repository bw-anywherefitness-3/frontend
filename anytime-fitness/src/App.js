
import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import Register from './Components/Register';
import Login from './Components/Login';
import ClassDetails from './Components/ClassDetails';
import InstructorDash from './Components/InstructorDash';
import CreateClassForm from './Components/CreateClassForm';
import UserDash from './Components/UserDash';

import UserSchema from './Validation/UserSchema';
import * as yup from 'yup';

import styled from 'styled-components';
import photo from '../src/Photos/gym.jpg'


const AppStyled = styled.div`
background-image: url(${photo});
background-repeat: no-repeat;
background-size: cover;
opacity:0.8;
background-attachment: fixed;
height: 100vh;
.App{
color: red;
font-family: 'Staatliches', cursive;
margin-top:0;
padding:2%;
}
.head{
  font-size: 90px;
  margin-bottom:0;
  margin-top:2%;
  letter-spacing: 0.2rem;
}
h3{
  color: white;
  font-size: 25px;
  -webkit-text-stroke-width: .3px;
  -webkit-text-stroke-color: black;
  letter-spacing: .2rem;
  margin-top: 2%;
}



`


const initialFormValues = {
 first_name: '',
 last_name: '',
  email: '', 
  password: '',
  role: ''
}

const initialFormErrors = {
 first_name: '',
 last_name: '',
  email: '', 
  password: '',
  role: ''
}


const initialUsers = []
const initialDisabled = true;
const initialClasses = []
const initialInstructors = []

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [instructors, setInstructors] = useState(initialInstructors);
  const [classes, setClasses] = useState(initialClasses);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

// Taking users info and pushing it into api.

  const formSubmit = () => {
    const newUser = {
     first_name: formValues.firstName.trim(),
     last_name: formValues.lastName.trim(),
      email: formValues.email.trim(), 
      password: formValues.password.trim(),
      role: formValues.role
    }
    console.log(newUser)
    postNewUser(newUser)
  }


  const loginSubmit = () => {
    const newLogin = {
      email: '',
      password: ''
    }
  }


const postNewUser = newUser => {
  axios.post('https://bw-anywherefitness-3.herokuapp.com/api/auth/register', newUser)
  .then(resp => {
    setUsers([resp.data, ...users]);
  }).catch(err => console.log(err))
  .finally(() => setFormValues(initialFormValues))
}

const validate = (name, value) => {
  yup.reach(UserSchema, name)
  .validate(value)
  .then(() => setFormErrors({ ...formErrors, [name]: '' }))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({ ...formValues, [name]: value })
}

const postNewClass = newClass => {
  axios.post('https://bw-anywherefitness-3.herokuapp.com/api/classes/:id', newClass)
  .then(resp => {
    setClasses([resp.data, ...classes]);
  }).catch(err => console.log(err))
  .finally(() => setFormValues(initialFormValues))
}

useEffect(() => {
  UserSchema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

const classFormSubmit = () => {
  const newClass = {
    cType: formValues.cType,
    sunday: formValues.sunday,
    monday: formValues.monday,
    tuesday: formValues.tuesday,
    wednesday: formValues.wednesday,
    thursday: formValues.thursday,
    friday: formValues.friday,
    saturday: formValues.saturday,
    duration: formValues.duration,
    intensity_level: formValues.intensity_level, 
    location: formValues.location,
    attendees: formValues.attendees,
    max_size: formValues.max_size
  }
  postNewClass(newClass)
}


  return (
    <AppStyled>
    <div className="App">
      <h1 className='head'>Anywhere Fitness</h1>
      <h3>The gym experience without the gym</h3>

      <Switch>
        <Route path='/userhome/classdetails'>
          <ClassDetails cDetails={classes} />
        </Route>
        <Route path='/instructorhome/createclass'>
                <CreateClassForm submit={classFormSubmit} />
            </Route>
        <Route path='/instructorhome'>
          <InstructorDash iDetails={instructors} createdCs={classes}/>
        </Route>

        <Route path='/userhome'>
          <UserDash uDetails={users} cDetails={classes} />
        </Route> 

        <Route path='/register'>
          <Register 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          errors={formErrors}
          disabled={disabled}
          />
        </Route>

        <Route path='/'>
          <Login 
          values={formValues}
          change={inputChange}
          submit={loginSubmit}
          errors={formErrors}
          />
        </Route>
      </Switch>
  </div>
  </AppStyled>
)}  