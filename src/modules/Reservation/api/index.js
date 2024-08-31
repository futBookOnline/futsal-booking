import { axiosInstance } from "@/helpers/axios"

export const getAllVenues = async () => {
    const response = (await axiosInstance.get("/venues")).data;
    return response.result;
}

export const getVenueById = async (id) => {
    const response = (await axiosInstance.get(`/venues/${id}`)).data
    return response.result;
}

export const createReservation = async (payload) => {
    const url = "reservations/create-reservation";
    const result = useRelatedApi(url, "post", payload)
} 