import { AppointmentsRequest } from "@/components/Appointments/types";
import { client } from "../../../services";
import { APPOINTMENTS_URL, AVAILABILITY_URL } from "./constants";


export const getAvailability = async (date: string) =>
client(AVAILABILITY_URL(date));

export const getAppointments = async ({ before, after, size }: AppointmentsRequest) => 
    /** TODO: we must refactor client to support a 'params' param and build the url */
    client(`${APPOINTMENTS_URL}?${before ? 'before=' + before : ''}${after ? 'after=' + after : ''}`);