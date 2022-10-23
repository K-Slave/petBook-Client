import axios from "axios";
import Cookies from "js-cookie";

const userToken = Cookies.get("petBookUser");

const pyInstance = axios.create();

pyInstance.defaults.headers.common["Content-Type"] = "application/json";

export const pyPetBookClient = pyInstance;

const sprInstance = axios.create();

sprInstance.defaults.headers.common["Content-Type"] = "application/json";
sprInstance.defaults.headers.common.accept = "*/*";

if (userToken) {
  sprInstance.defaults.headers.common.authorization = userToken;
}

export const sprPetBookClient = sprInstance;
