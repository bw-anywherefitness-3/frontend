
import './App.css';
import Login from './login'
import React, { useState } from 'react'

const initialFormValues = {
  //Text boxes
  email: '',
  password: '',
role: '',
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)

const inputChange = (name, value) => {
setFormValues({...formValues, [name]: value});
}

  return (
    <div className="App">
      <Login values={formValues} change={inputChange}/>
    </div>
  );
}

export default App;
