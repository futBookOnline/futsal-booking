import axios from "axios";

const hitApi = async (url, method, payload) => {
  const urlA = `https://futsal-backend.onrender.com/${url}`;
  const methodA = method.toUpperCase();
  let result;
  switch (methodA) {
    case "GET":
      result = await axios.get(urlA);
      return result.data.futsals;
  }
};

export default hitApi