import React from 'react';
import { useLogin } from '../../hooks/services/auth/useLogin';
import styles from './Login.module.css';
import Spinner from '../Spinner';
import { useForm } from 'react-hook-form';
import { loginResolver } from './utils';
import Input from '../Input/Input';
import { useRouter } from 'next/router';

const SPINNER_WRAPPER_STYLES = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
};

const ERROR_MESSAGE = 'Something went wrong, please try again.';

const LoginBox = () => {
    const router = useRouter();

    const {
        handleLogin,
        isLoading,
        isSuccess,
        error: serverError,
    } = useLogin();

    const {
        register,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm({
        resolver: loginResolver,
    });

    /** for simplicity we will rely on a boolean */
    const hasServerError = !!serverError;
    const onSubmit = handleSubmit((loginRequest) => {
        handleLogin(loginRequest);
    });

    React.useEffect(() => {
        if (isSuccess) {
            router.push('/dashboard');
        }
    }, [isSuccess, router]);

    return (
        <div className={styles.loginbox}>
            <div className={styles['loginbox_text']}>
                <h1>Log in</h1>
                <h2>Welcome back to Curbee!</h2>
            </div>
            {isLoading ? (
                <div style={SPINNER_WRAPPER_STYLES}>
                    <Spinner />
                </div>
            ) : (
                <form onSubmit={onSubmit}>
                    <Input
                        id="email"
                        label="Email"
                        type="email"
                        error={formErrors.email?.message}
                        register={() => register('email')}
                    />
                    <Input
                        id="password"
                        label="Password"
                        type="password"
                        error={formErrors.password?.message}
                        register={() => register('password')}
                    />
                    {hasServerError ? (
                        <label style={{ color: 'hsl(0deg, 50%, 50%)' }}>
                            {ERROR_MESSAGE}
                        </label>
                    ) : null}
                    <button type="submit">Log In</button>
                </form>
            )}
        </div>
    );
};

export default LoginBox;
