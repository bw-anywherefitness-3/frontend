import * as yup from 'yup';

const UserSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required()
        .min(2, 'first name must be at least 2 characters'),
    lastName: yup
        .string()
        .trim()
        .required()
        .min(2, 'last name must be at least 2 characters'),
    password: yup
        .string()
        .trim()
        .required()
        .min(6, 'name must be at least 6 characters'),
        email: yup
    .string()
    .trim()
    .email('Gotta be a valid email address!')
    .required('email address required'),
    role: yup 
    .string()
    .oneOf(['client', 'instructor'], 'role is required!'),
})

export default UserSchema;