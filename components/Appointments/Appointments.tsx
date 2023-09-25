import React from 'react';
import useAppointments from '../../hooks/services/dashboard/useAppointments';

import styles from './Appointments.module.css';
import AppointmentCard from '../AppointmentCard';
import { NormalizedAppointment } from './types';
import { normalizeAppointments } from './utils';
import AvailableDates from './AvailableDates';
import { useRouter } from 'next/router';

const Appointments = () => {
    const router = useRouter();
    const { query } = router;
    const previousCursorQuery = query?.before ?? '';
    const nextCursorQuery = query?.after ?? '';

    const { data, pageInfo } = useAppointments({
        before: previousCursorQuery as string,
        after: nextCursorQuery as string,
    });

    const normalizedData = normalizeAppointments(data);

    const handlePrevious = () => {
        router.push(
            {
                query: { before: pageInfo.previousCursor },
            },
            undefined,
            { shallow: true }
        );
    };
    const handleNext = () => {
        router.push(
            {
                query: { after: pageInfo.nextCursor },
            },
            undefined,
            { shallow: true }
        );
    };

    return (
        <div className={styles.appointments}>
            <h1>Appointments</h1>
            <AvailableDates />
            <div className={styles['appointments__card__wrapper']}>
                {normalizedData?.map((appointment: NormalizedAppointment) => (
                    <AppointmentCard
                        key={appointment.id}
                        appointment={appointment}
                    />
                ))}
            </div>
            <div className={styles['appointments__pagination']}>
                {pageInfo?.hasPreviousPage ? (
                    <button onClick={handlePrevious}>Previous</button>
                ) : null}
                {pageInfo?.hasNextPage ? (
                    <button onClick={handleNext}>Next</button>
                ) : null}
            </div>
        </div>
    );
};

export default Appointments;
