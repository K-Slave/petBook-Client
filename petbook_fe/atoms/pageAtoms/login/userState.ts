import { atom } from "recoil";

export const registerFormState = atom<{
  email: string;
  password: string;
  nickname: string;
}>({
  key: "userState",
  default: {
    email: "",
    password: "",
    nickname: "",
  },
});

export const loginFormState = atom<{
  email: string;
  password: string;
}>({
  key: "userState",
  default: {
    email: "",
    password: "",
  },
});
