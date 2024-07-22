import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://realestate-production-482b.up.railway.app/api",
  withCredentials: true,
});

export default apiRequest;