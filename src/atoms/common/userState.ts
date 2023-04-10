import { atom } from "recoil";

const userState = atom({
  key: "userState",
  default: "userData",
});

export default userState;
