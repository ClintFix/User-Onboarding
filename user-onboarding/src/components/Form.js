import React from 'react' 
import * as yup from 'yup'
import Axios from 'axios'

function Form(props){
    const { formValues, onFormChange, formSubmit, disabled, formErrors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        formSubmit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        onFormChange(name, value);
    }
// JSX //
    return (
        <form onSubmit = {onSubmit}>
            <div>
                <h2>New User</h2>
                <div>
                    <div>{formErrors.name}</div>
                    <div>{formErrors.email}</div>
                    <div>{formErrors.password}</div>
                    <div>{formErrors.terms}</div>
                </div>
            </div>
            <div>
                <label>Name
                    <input
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={formValues.name}
                    />
                </label>
                <label>Email
                    <input
                        type='text'
                        name='email'
                        onChange={onChange}
                        value={formValues.email}
                    />
                </label>
                <label>Password
                    <input
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={formValues.password}
                    />
                </label>
                <label>Terms of Service
                    <input
                        type='checkbox'
                        name='terms'
                        onChange={onChange}
                        value={formValues.terms}
                    />
                </label>
            </div>
        </form>
    )

} // end Form

export default Form;