import * as yup from "yup";

const Schema =yup.object().shape({
    fullname:yup.string().required(),
    email:yup.string().required().email(),
    password: yup.string().required('Password is required').min(4).max(32),
    passwordConfirm:yup.string()
       .oneOf([yup.ref('password'), null], 'Passwords must match')});

export const UserValid=Schema;