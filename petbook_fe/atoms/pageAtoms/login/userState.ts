import { atom } from "recoil";

export const userState = atom<{
  email: string;
  password: string;
  nicName: string;
}>({
  key: "userState",
  default: {
    email: "",
    password: "",
    nicName: "",
  },
});
