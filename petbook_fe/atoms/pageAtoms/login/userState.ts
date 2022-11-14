import { atom } from "recoil";

export const registerFormState = atom<{
  email: string;
  password: string;
  nickname: string;
}>({
  key: "registerFormState",
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
  key: "loginFormState",
  default: {
    email: "",
    password: "",
  },
});
