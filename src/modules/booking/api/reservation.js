import useRelatedApi from "@/helpers/apiHelper";

export const createReservation = async (payload) => {
    const url = "reservations/create-reservation";
    const result = useRelatedApi(url, "post", payload)
} 