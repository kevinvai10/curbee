import React from 'react';
import useAuth from '../../hooks/services/auth/useAuth';
import { useRouter } from 'next/router';
import useAvailability from '../../hooks/services/dashboard/useAvailability';
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
    const { data: availabilityData } = useAvailability('2023-09-26');

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
