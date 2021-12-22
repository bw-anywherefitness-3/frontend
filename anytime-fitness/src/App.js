
import './App.css';
import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Register from './Components/Register';
import Login from './Components/Login';
import ClassDetails from './Components/ClassDetails';
import InstructorDash from './Components/InstructorDash';
import UserDash from './Components/UserDash';

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


export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  

  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    const newUser = {
      firstName: '',
      lastName: '',
      email: '', 
      password: '',
      role: ''
    }
  }

  return (
    <div className="App">
      <h1>Anywhere Fitness</h1>
      <h3>The gym experience without the gym</h3>
      <div className='nav-links'>
        <Link to='/'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>

      <Switch>
        <Route path='/userhome/classdetails'>
          <ClassDetails />
        </Route>
        <Route path='/instructorhome'>
          <InstructorDash />
        </Route>
        <Route path='/userhome'>
          <UserDash />
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
          <Login />
        </Route>
      </Switch>
  </div>
)}