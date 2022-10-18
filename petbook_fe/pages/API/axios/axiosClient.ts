import axios from "axios";

const pypetbookAxiosClient = axios.create();

pypetbookAxiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
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
