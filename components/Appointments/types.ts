export type Appointment = {
    id: string;
    paymentId: string;
    userId: string;
    duration: number;
    scheduledTime: string;
    status: 'SCHEDULED' | 'PAID' | 'COMPLETE' | 'IN_PROGRESS';
    workOrder: {
        service: string;
    };
};

export type Edge = {
    cursor: string;
    node: Appointment;
}

export type NormalizedAppointment = Appointment & { cursor: string};