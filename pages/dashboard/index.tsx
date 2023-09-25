import React from 'react';
import useAuth from '../../hooks/services/auth/useAuth';
import { useRouter } from 'next/router';
import Appointments from '../../components/Appointments';

const DASHBOARD_PAGE_WRAPPER_STYLES = {
    padding: '64px 32px',
};

function Dashboard() {
    /*
        ideally we would call an auth endpoint
        on the server side render and redirect
    */
    const router = useRouter();
    const isAuth = useAuth();

    React.useLayoutEffect(() => {
        if (!isAuth) {
            router.push('/login');
        }
    }, [isAuth, router]);

    return (
        <div style={DASHBOARD_PAGE_WRAPPER_STYLES}>
            <Appointments />
        </div>
    );
}

export default Dashboard;
