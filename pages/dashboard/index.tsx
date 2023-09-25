import React from 'react';
import useAuth from '../../hooks/services/auth/useAuth';
import { useRouter } from 'next/router';
import Appointments from '../../components/Appointments';
import nookies from 'nookies';
import { getAppointmentsSSR } from '../../hooks/services/dashboard/requests';
import { QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';

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

    React.useEffect(() => {
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

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const queryClient = new QueryClient();

    const cookies = nookies.get(context);
    const authorization = `Bearer ${cookies.Authorization}`;
    const before = (context.query?.before as string) ?? '';
    const after = (context.query?.after as string) ?? '';

    /** TODO: fix ssr prefetch */
    const data = await getAppointmentsSSR({
        queryClient,
        before,
        after,
        authorization,
    });

    return {
        props: {},
    };
};

export default Dashboard;
