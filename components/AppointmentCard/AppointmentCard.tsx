import React from 'react';

import styles from './AppointmentCard.module.css';
import { Appointment } from '../Appointments/types';

type Props = {
    appointment: Appointment;
};

const AppointmentCard = ({ appointment }: Props) => {
    /**
     * TODO: use a library that solves dates since
     * manipulating dates with vainilla js might
     * not consider things like daylight savings time etc
     * */
    const scheduledTime = new Date(appointment.scheduledTime);
    const formattedScheduledTime = scheduledTime.toLocaleString('en-us', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    });
    const startTime = scheduledTime.toLocaleString('en-us', {
        hour: 'numeric',
    });
    /** Assuming appointment duration is in minutes */
    const endTimeMs =
        scheduledTime.getTime() + appointment.duration * 60 * 1000;
    const endTimeDate = new Date(endTimeMs).toLocaleString('en-us', {
        hour: 'numeric',
    });

    return (
        <div className={styles.card}>
            <div className={styles['card__title']}>
                <p>{formattedScheduledTime}</p>
            </div>
            <div className={styles['card__content']}>
                <div className={styles['card__content__date']}>
                    <strong>{appointment.status}</strong>
                    <p>
                        {startTime}
                        &nbsp;
                        <span> - </span>
                        &nbsp;
                        <span>{endTimeDate}</span>
                    </p>
                </div>
                <div className={styles['card__content__summary']}>
                    <p>Service</p>
                    <p>{appointment.workOrder.service}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
