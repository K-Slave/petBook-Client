import { atom } from "recoil";

export const sliderModalState = atom<{
  show: boolean;
  currentIndex: number;
  prevIndex: number;
}>({
  key: "sliderModalState",
  default: {
    show: false,
    currentIndex: 0,
    prevIndex: 0,
  },
});
