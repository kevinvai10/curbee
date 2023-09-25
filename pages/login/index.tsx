import React from 'react';
import useAuth from '../../hooks/services/auth/useAuth';
import LoginBox from '../../components/Login/LoginBox';
import { useRouter } from 'next/router';

const LOGIN_PAGE_WRAPPER_STYLES = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

function Login() {
    /*
        ideally we would call an auth endpoint
        on the server side render and redirect
    */
    const router = useRouter();
    const isAuth = useAuth();

    React.useEffect(() => {
        if (isAuth) {
            router.push('/dashboard');
        }
    }, [isAuth, router]);

    return (
        <div style={LOGIN_PAGE_WRAPPER_STYLES}>
            <LoginBox />
        </div>
    );
}

export default Login;
