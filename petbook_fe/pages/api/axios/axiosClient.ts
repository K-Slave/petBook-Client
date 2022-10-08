import axios from "axios";

const axiosClient = axios.create();
// petBookInstance.defaults.baseURL = process.env.BACKEND_BASE_URL as string;
axiosClient.defaults.baseURL = "https://pypetbook.herokuapp.com";
axiosClient.defaults.headers.common["Content-Type"] = "application/json";

export const petBookClient = axiosClient;
