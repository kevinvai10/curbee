import React from 'react';
import LoginBox from '../../components/Login/LoginBox';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';

const LOGIN_PAGE_WRAPPER_STYLES = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

function Login() {
    return (
        <div style={LOGIN_PAGE_WRAPPER_STYLES}>
            <LoginBox />
        </div>
    );
}

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    /** TODO: this should be replaced with an /auth endpoint */
    const cookies = nookies.get(context);
    const isAuthorized = !!cookies.Authorization;

    if (isAuthorized) {
        return {
            redirect: {
                permanent: false,
                destination: `/dashboard`,
            },
        };
    }

    return {
        props: {},
    };
};

export default Login;
