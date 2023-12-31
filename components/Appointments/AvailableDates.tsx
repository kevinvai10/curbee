import React from 'react';
import { getAvailability } from '../../hooks/services/dashboard/requests';

import styles from './Appointments.module.css';

const AvailableDates = () => {
    const [selectedDate, setSelectedDate] = React.useState('');
    const [availableDates, setAvailabileDates] = React.useState([]);

    React.useEffect(() => {
        async function setAvailability() {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const formattedTomorrow = `${tomorrow.getFullYear()}-${tomorrow.toLocaleString(
                'en-us',
                { month: '2-digit' }
            )}-${tomorrow.getDate()}`;

            const result = await getAvailability(formattedTomorrow);
            setAvailabileDates(result);
        }
        if (selectedDate) {
            setAvailability();
        }
    }, [selectedDate]);

    return (
        <div className={styles['appointments__dates']}>
            <div className={styles['appointments__dates__input']}>
                <label htmlFor="dates">Appointment Dates</label>
                <select
                    id="dates"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                >
                    <option disabled selected value={''}>
                        select an option
                    </option>
                    <option value="tomorrow">Tomorrow</option>
                </select>
            </div>
            <div>
                {availableDates.length > 0
                    ? availableDates.map((date, index) => (
                          <div key={`${date}-${index}`}>
                              {new Date(date).toLocaleString('en-us')}
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default AvailableDates;
