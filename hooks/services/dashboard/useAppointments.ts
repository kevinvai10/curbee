import { useQuery } from "@tanstack/react-query";
import { APPOINTMENTS_URL, AVAILABILITY_URL } from "./constants";
import { getAppointments, getAvailability } from "./requests";

function useAppointments () {
    const { data, error, isLoading } = useQuery(
        [APPOINTMENTS_URL],
        () => getAppointments(),
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