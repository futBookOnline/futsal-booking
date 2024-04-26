import axios from "axios";

const useRelatedApi = async (url, method, payload) => {
  const apiUrl = `https://futsal-backend.onrender.com/${url}`;
  const httpMethod = method.toUpperCase();
  let result;
  switch (httpMethod) {
    case "GET":
      result = await axios.get(apiUrl);
      return result.data.futsals;
  }
};

export default useRelatedApi