import { atom } from "recoil";

const imageModalState = atom<{
  show: boolean;
  currentIndex: number;
  prevIndex: number;
  images: string[];
}>({
  key: "imageModalState",
  default: {
    show: false,
    currentIndex: 0,
    prevIndex: 0,
    images: [],
  },
});

export default imageModalState;
