import React from 'react';
import useAppointments from '../../hooks/services/dashboard/useAppointments';

import styles from './Appointments.module.css';
import AppointmentCard from '../AppointmentCard';

type Props = {};

const Appointments = (props: Props) => {
    const { data: appointmentsData } = useAppointments();

    return (
        <div className={styles['appointments_container']}>
            <h1>dashboard</h1>
            <AppointmentCard />
        </div>
    );
};

export default Appointments;
