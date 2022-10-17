import { atom } from "recoil";

const userState = atom<{
  userEmail: string;
  userEmailCheck: string;
  password: string;
  nicName: string;
}>({
  key: "userState",
  default: {
    userEmail: "",
    userEmailCheck: "",
    password: "",
    nicName: "",
  },
});

export default userState;
