import React, {useState, useEffect} from 'react'
import Form from './components/Form'
import './App.css';
import Axios from 'axios';
import formSchema from './validation/formSchema'
import * as yup from 'yup'

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
      setUsers([res.data, ...users]); //spread in current users, after new user added to array. Set to state
      console.log(res)
    })
    .catch(err => {
      console.log(`Error with axios post: ${err}`);
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
//set formvalues (spread formvalues and then add name: value)
const onFormChange = (name, value) => {
  yup.reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })

    setFormValues({...formValues, [name]: value})
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
  formSchema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
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
            <div className = {user.id}>
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
