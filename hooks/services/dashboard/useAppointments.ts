import { useQuery } from "@tanstack/react-query";
import { APPOINTMENTS_URL, AVAILABILITY_URL } from "./constants";
import { getAppointments, getAvailability } from "./requests";
import { AppointmentsRequest } from "@/components/Appointments/types";

function useAppointments ({ before, after, size }: AppointmentsRequest) {
    const { data, error, isLoading } = useQuery(
        [APPOINTMENTS_URL, before, after, size],
        () => getAppointments({ before, after, size }),
        {
            refetchOnWindowFocus: false
        }
    );

    return {
        data: data?.edges,
        pageInfo: data?.pageInfo,
        error,
        isLoading
    }
}

export default useAppointments;