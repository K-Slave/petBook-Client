import { atom } from "recoil";

const sliderModalState = atom<{
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

export default sliderModalState;
