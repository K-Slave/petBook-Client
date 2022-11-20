import axios from "axios";

const sprInstance = axios.create();

sprInstance.defaults.headers.common["Content-Type"] = "application/json";
sprInstance.defaults.headers.common.Accept = "*/*";

export const sprPetBookClient = sprInstance;

export const dnter = "";
