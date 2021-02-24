import React, {useState, useEffect} from 'react'
import Form from './components/Form'
import './App.css';

// Initial Conditions for State
const initialUsers = [
  {name: 'Joe',email: 'joe@schmoe.com', password: 'password1', terms: true}
]

const initialFormValues = {
  name: '', email: '', password: '', terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialDisabled = true;

///////// APP Component ////////////

function App() {
// State
const [user, newUser] = useState(initialUsers) //Array of user objects
const [formValues, setFormValues] = useState(initialFormValues) //object
const [formErrors, setFormErrors] = useState(initialFormErrors) //object
const [disabled, setDisabled] = useState(initialDisabled) //boolean

// Helper functions

// Event handlers

// Side effects



  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
