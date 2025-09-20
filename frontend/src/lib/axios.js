import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://fullstackchatapplication-ux34.onrender.com/api" : "/api",
  withCredentials: true,
});
