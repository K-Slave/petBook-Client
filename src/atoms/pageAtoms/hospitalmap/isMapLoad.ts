import { atom } from "recoil";

const isMapLoadState = atom<boolean>({
  key: "isMapLoadState",
  default: false,
});

export default isMapLoadState;
