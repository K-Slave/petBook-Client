import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import { atom } from "recoil";

const imageModalState = atom<{
  show: boolean;
  images: ArticleResponse["images"];
  initialImageIndex: number;
}>({
  key: "imageModalState",
  default: {
    show: false,
    images: [],
    initialImageIndex: 0,
  },
});

export default imageModalState;
