import axios from "axios";

const pypetbookAxiosClient = axios.create();

pypetbookAxiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_PY_URL;
pypetbookAxiosClient.defaults.headers.common["Content-Type"] =
  "application/json";

export const pypetbookClient = pypetbookAxiosClient;

const sprpetbookAxiosClient = axios.create();

sprpetbookAxiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_SPR_URL;

sprpetbookAxiosClient.defaults.headers.common["Content-Type"] =
  "application/json";
sprpetbookAxiosClient.defaults.headers.common.accept = "*/*";

export const sprpetbookClient = sprpetbookAxiosClient;
