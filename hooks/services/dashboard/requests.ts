import { AppointmentsRequest } from "@/components/Appointments/types";
import { client } from "../../../services";
import { APPOINTMENTS_URL, AVAILABILITY_URL } from "./constants";
import { QueryClient } from "@tanstack/react-query";


export const getAvailability = async (date: string) =>
client(AVAILABILITY_URL(date));

export const getAppointments = async ({ before, after, size }: AppointmentsRequest) => 
    /** TODO: we must refactor client to support a 'params' param and build the url */
    client(`${APPOINTMENTS_URL}?${before ? 'before=' + before : ''}${after ? 'after=' + after : ''}`);

    // TODO: this still doesn't work
export const getAppointmentsSSR = async ({ queryClient, before, after, size, authorization }: AppointmentsRequest & { authorization: string, queryClient: QueryClient }) =>
    queryClient.prefetchQuery([APPOINTMENTS_URL, before, after, size], () =>
    client(`${APPOINTMENTS_URL}?${before ? 'before=' + before : ''}${after ? 'after=' + after : ''}`, { headers: { 'Authorization': authorization } })
);