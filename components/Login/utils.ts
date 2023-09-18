import * as yup from 'yup';
import YupPassword from 'yup-password';
import { yupResolver } from '@hookform/resolvers/yup';

YupPassword(yup);

const loginSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
});

export const loginResolver = yupResolver(loginSchema);
