import React, {useState, useEffect} from 'react'
import Form from './components/Form'
import './App.css';
import Axios from 'axios';

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
// State //
const [users, setUsers] = useState(initialUsers) //Array of user objects
const [formValues, setFormValues] = useState(initialFormValues) //object
const [formErrors, setFormErrors] = useState(initialFormErrors) //object
const [disabled, setDisabled] = useState(initialDisabled) //boolean

// Helper functions //

// Post new user to API
const postNewUser = newUser => {
  //axios post
  //then -> update user in state.
  // reset form values
  Axios.post('https://reqres.in/api/users', newUser)
    .then(res => {

    })
    .catch(err => {

    })
  setFormValues(initialFormValues)
}

// Event handlers //

// onChange 
// validate with yup
// .reach (make sure to create and import schema and pass item to validate)
// validate (pass value to validate)
// .then (no errors), update formErrors
// .catch (errors), update formErrors with new error
const onFormChange = (name, value) => {

}

// formSubmit
// add formValues state to newUser object, cleaning up datea as it goes
// call helper function to post newUser to api (the helper updates user state)
const formSubmit = () => {
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: formValues.terms,
  }
  postNewUser(newUser);
}
// Side effects

// disabled button - updates on formValues change. 
// .isValid returns promise. if true, enable button
useEffect(() => {

}, [formValues])

// JSX //
  return (
    <div className="App">
      <Form 
        formValues = {formValues}
        onFormChange = {onFormChange}
        formSubmit = {formSubmit}
        disabled = {disabled}
        formErrors = {formErrors}
      />
      {
        users.map(user => {
          return (
            <div>
              <h3>{user.name}</h3>
              <p>{`Email: ${user.email}`}</p>
              <p>{`Password: ${user.password}`}</p>
              <p>{`Accepted Terms: ${user.terms}`}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
