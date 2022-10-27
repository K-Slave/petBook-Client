import { atom } from "recoil";

export const userState = atom<{
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
