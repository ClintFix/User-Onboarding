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

    
} // end Form

export default Form;