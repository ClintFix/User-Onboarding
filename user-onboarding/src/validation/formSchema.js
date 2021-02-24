import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required'),
    email: yup.string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('A password is rquired'),
    terms: yup.boolean()
        .oneOf([true], 'You must accept the terms to continue'),
})

export default formSchema;