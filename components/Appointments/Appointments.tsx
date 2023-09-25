import React from 'react';
import useAppointments from '../../hooks/services/dashboard/useAppointments';

import styles from './Appointments.module.css';
import AppointmentCard from '../AppointmentCard';
import { NormalizedAppointment } from './types';
import { normalizeAppointments } from './utils';

const Appointments = () => {
    const { data } = useAppointments();
    const normalizedData = normalizeAppointments(data);

    return (
        <div className={styles['appointments_container']}>
            <h1>Appointments</h1>
            {normalizedData?.map((appointment: NormalizedAppointment) => (
                <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                />
            ))}
        </div>
    );
};

export default Appointments;
