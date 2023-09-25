import { Edge, NormalizedAppointment } from "./types";

export const normalizeAppointments = (data: Edge[]): NormalizedAppointment[] | undefined => {
    if (!data) return undefined;
    /** return an object with both cursor and node data at the same level */
    const normalizedAppointments = data.reduce((accumulator: NormalizedAppointment[], currentVal) => {
        const newValue = { ...currentVal.node, cursor: currentVal.cursor };
        return [...accumulator, newValue];
    }, []);

    return normalizedAppointments;
}