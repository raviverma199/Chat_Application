import axios from "axios";

const BASE_URL = "http://localhost:2020";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const ApiCall = async (method, url, data = null, headers = {}) => {
  try {
    console.log(method,url,data,headers)
    const response = await axiosInstance({
      method,
      url,
      data,
      headers,
    });
    

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
};

export default ApiCall;
