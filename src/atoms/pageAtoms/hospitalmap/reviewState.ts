import { atom } from "recoil";

interface reviewState {
  hospitalId: number;
  content: string;
  disease: string;
  imageIds: undefined;
  experience: string;
  petName: string;
}

export const reviewFormState = atom<reviewState[]>({
  key: "reviewFormState",
  default: [],
});

export default { reviewFormState };
