import { axiosInstance } from "@/helpers/apiHelper";

export const getAllFutsals = async () => {
    const response = (await axiosInstance.get("/venues")).data;
    const futsals = response.result;
    return futsals;
}

