import axios from "axios";

const sprInstance = axios.create();

sprInstance.defaults.headers.common["Content-Type"] = "application/json";
sprInstance.defaults.headers.common.Accept = "*/*";

export const sprPetBookClient = sprInstance;

const nextInstance = axios.create();

nextInstance.defaults.headers.common["Content-Type"] = "application/json";
nextInstance.defaults.headers.common.Accept = "*/*";

export const nextPetBookClient = nextInstance;
