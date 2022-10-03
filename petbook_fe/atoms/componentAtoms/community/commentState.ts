import { atom } from "recoil";

export const commentState = atom<{ comment: string }>({
  key: "commentState",
  default: {
    comment: "",
  },
});
