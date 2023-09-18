import { useMutation } from '@tanstack/react-query';
import { login } from './requests';
import { LoginFields } from './types';

export const useLogin = () => {
    const { mutate, status, error, isLoading, isSuccess } = useMutation((loginRequest: LoginFields) => login(loginRequest), {
        onSuccess: (data) => {
            console.log({data})
            console.log("successful request")
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
