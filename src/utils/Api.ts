import axios from "axios";

const params = {
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_STRAPI_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get("http://localhost:1337" + url, params);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
