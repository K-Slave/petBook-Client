import { atom } from "recoil";
import { getCookie } from "cookies-next";
import jwt_decode from "jwt-decode";

const userCookie = getCookie("petBookUser")?.toString();
const userData = userCookie ? jwt_decode(userCookie) : "";

const userState = atom({
  key: "userState",
  default: userData,
});

export default userState;
