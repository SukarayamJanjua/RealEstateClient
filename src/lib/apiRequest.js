import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://realestate-backend-xsgb.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;