import { useMutation } from '@tanstack/react-query';
import { login } from './requests';
import { LoginFields } from './types';
import Cookies from 'universal-cookie';

export const useLogin = () => {
    const {
        mutate,
        status,
        error,
        isLoading,
        isSuccess
    } = useMutation((loginRequest: LoginFields) => login(loginRequest), {
        onSuccess: (data) => {
            const cookies = new Cookies();
            cookies.set('Authorization', `Bearer ${data.token}`)
        }
    });

    const handleLogin = async (loginRequest: LoginFields) => {
        mutate(loginRequest);
    };

    return {
        handleLogin,
        status,
        error,
        isLoading,
        isSuccess,
    };
};
