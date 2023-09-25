import React from 'react';
import Appointments from '../../components/Appointments';
import nookies from 'nookies';
// import { getAppointmentsSSR } from '../../hooks/services/dashboard/requests';
import { QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';

const DASHBOARD_PAGE_WRAPPER_STYLES = {
    padding: '64px 32px',
};

function Dashboard() {
    return (
        <div style={DASHBOARD_PAGE_WRAPPER_STYLES}>
            <Appointments />
        </div>
    );
}

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    // const queryClient = new QueryClient();
    /** TODO: this should be replaced with an /auth endpoint */
    const cookies = nookies.get(context);

    const isAuthorized = !!cookies.Authorization;

    if (!isAuthorized) {
        return {
            redirect: {
                permanent: false,
                destination: `/login`,
            },
        };
    }

    const authorization = `Bearer ${cookies.Authorization}`;
    const before = (context.query?.before as string) ?? '';
    const after = (context.query?.after as string) ?? '';

    /** TODO: fix ssr prefetch */
    // const data = await getAppointmentsSSR({
    //     queryClient,
    //     before,
    //     after,
    //     authorization,
    // });

    return {
        props: {},
    };
};

export default Dashboard;
