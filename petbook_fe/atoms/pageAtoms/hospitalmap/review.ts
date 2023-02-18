import { atom } from "recoil";

export const reviewFormState = atom<{
  hospitalId: number;
  content: string;
  disease: string;
  imageIds?: number[];
  experience: string;
}>({
  key: "reviewFormState",
  default: {
    hospitalId: 0,
    content: "",
    disease: "",
    imageIds: [],
    experience: "",
  },
});

export default reviewFormState;
