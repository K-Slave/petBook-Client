import axios from "axios";

const petBookAxiosClient = axios.create();

petBookAxiosClient.defaults.baseURL = "https://pypetbook.herokuapp.com";
petBookAxiosClient.defaults.headers.common["Content-Type"] = "application/json";

export const client = petBookAxiosClient;
