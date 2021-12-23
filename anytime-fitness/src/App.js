
import './App.css';
import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios'
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
// const initialDisabled = true;
const initialClasses = []
const initialInstructors = []

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [instructors, setInstructors] = useState(initialInstructors);
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

const postNewUser = newUser => {
  axios.post('https://bw-anywherefitness-3.herokuapp.com/api/users', newUser)
  .then(resp => {
    setUsers([resp.data, ...users]);
  }).catch(err => console.log(err))
  .finally(() => setFormValues(initialFormValues))
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
          <ClassDetails cDetails={classes} />
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
)}