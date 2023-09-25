import React from 'react';

import styles from './AppointmentCard.module.css';

const AppointmentCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles['card__title']}>
                <p>March 29, 2023</p>
            </div>
            <div className={styles['card__content']}>
                <div className={styles['card__content__date']}>
                    <strong>Started/Completed</strong>
                    <p>10:00 - 12:00 PM</p>
                </div>
                <div className={styles['card__content__summary']}>
                    <p>Service</p>
                    <ul>
                        <li>Signature</li>
                        <li>Tire Pressure</li>
                        <li>Eco Friendly Wash</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
