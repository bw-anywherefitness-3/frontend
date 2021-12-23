
import './App.css';
import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import Register from './Components/Register';
import Login from './Components/Login';
// import ClassDetails from './Components/ClassDetails';
// import InstructorDash from './Components/InstructorDash';
import UserDash from './Components/UserDash';
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
  firstName: '',
  lastName: '',
  email: '', 
  password: '',
  role: ''
}

const initialFormErrors = {
  firstName: '',
  lastName: '',
  email: '', 
  password: '',
  role: ''
}


const initialUsers = []
// const initialDisabled = true;
const initialClasses = []

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [classes, setClasses] = useState(initialClasses);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  // const [disabled, setDisabled] = useState(initialDisabled);
  

  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value })
  }

// Taking users info and pushing it into api.
  const formSubmit = () => {
    const newUser = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
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
  axios.post('https://bw-anywherefitness-3.herokuapp.com/api/users', newUser)
  .then(resp => {
    setUsers([resp.data, ...users]);
  }).catch(err => console.log(err))
  .finally(() => setFormValues(initialFormValues))
}



  return (
    <AppStyled>
    <div className="App">
      <h1 className='head'>Anywhere Fitness</h1>
      <h3>The gym experience without the gym</h3>

      <Switch>
        {/* <Route path='/userhome/classdetails'>
        </Route>
        <Route path='/instructorhome'>
  </Route> */}
        <Route path='/userhome'>
        </Route>

        <Route path='/'>
          <Login 
          values={formValues}
          change={inputChange}
          submit={loginSubmit}
          errors={formErrors}
          />
        </Route>
        <Route>
          <UserDash uDetails={users} cDetails={classes} />
        </Route> 
        <Route path='/register'>
          <Register 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          errors={formErrors}
          />
        </Route>

        <Route path='/'>
          <Login 
          values={formValues}
          change={inputChange}
          />
        </Route>
      </Switch>
  </div>
  </AppStyled>
)}  