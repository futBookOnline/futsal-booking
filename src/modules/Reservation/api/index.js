import { axiosInstance } from "@/helpers/axios"

export const getAllVenues = async () => {
    const response = (await axiosInstance.get("/venues")).data;
    return response;
}

export const getVenueById = async (id) => {
    const response = (await axiosInstance.get(`/venues/${id}`)).data
    return response.result;
}

export const createReservation = async (payload) => {
    const response = await axiosInstance.post("reservations/create-reservation", payload);
    return response.status;
}

export const getSlotsById=async (id)=>{
  const response = await axiosInstance.get('/slots/venue', {
    params: {
        venueId: id
    }
  });
  return response.data;
}
