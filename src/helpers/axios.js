import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_KEY_API_URL,
  timeout: 12000 //two minutes
});

export { axiosInstance };
