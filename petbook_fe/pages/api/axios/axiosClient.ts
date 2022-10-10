import axios from "axios";

const pypetbookAxiosClient = axios.create();
// petBookInstance.defaults.baseURL = process.env.BACKEND_BASE_URL as string;
pypetbookAxiosClient.defaults.baseURL = "https://pypetbook.herokuapp.com";
pypetbookAxiosClient.defaults.headers.common["Content-Type"] =
  "application/json";

export const pypetbookClient = pypetbookAxiosClient;

const sprpetbookAxiosClient = axios.create();

sprpetbookAxiosClient.defaults.baseURL =
  "https://petbook-server.herokuapp.com/";
sprpetbookAxiosClient.defaults.headers.common["Content-Type"] =
  "application/json";
sprpetbookAxiosClient.defaults.headers.common["accept"] = "*/*";

export const sprpetbookClient = sprpetbookAxiosClient;
