import { client } from "../../../services";
import { APPOINTMENTS_URL, AVAILABILITY_URL } from "./constants";


export const getAvailability = async (date: string) =>
client(AVAILABILITY_URL(date));

export const getAppointments = async () =>
client(APPOINTMENTS_URL);