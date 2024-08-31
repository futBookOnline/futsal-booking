import axiosInstance from "@/helpers/apiHelper"

export const getFutsalById = async (id) => {
    const url = `venues/${id}`;
    const response = (await axiosInstance.get(url)).data;
    return response.data
}


