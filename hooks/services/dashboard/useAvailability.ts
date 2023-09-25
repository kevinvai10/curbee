import { useQuery } from "@tanstack/react-query";
import { AVAILABILITY_URL } from "./constants";
import { getAvailability } from "./requests";

function useAvailability (date: string) {
    const { data, error, isLoading } = useQuery(
        [AVAILABILITY_URL],
        () => getAvailability(date),
        {
            refetchOnWindowFocus: false
        }
    );

    return {
        data: data?.data,
        error,
        isLoading
    }
}

export default useAvailability;