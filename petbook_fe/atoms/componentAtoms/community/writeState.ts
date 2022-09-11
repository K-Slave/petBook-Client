import { atom } from "recoil";

export type CategoryFilterType = {
  selectedCategory: string;
  inputTitle: string;
  inputContent: string;
};

const writeState = atom<{
  selectedCategory: string;
  inputTitle: string;
  inputContent: string;
}>({
  key: "writeState",
  default: {
    selectedCategory: "질문과 답변",
    inputTitle: "",
    inputContent: "",
  },
});

export default writeState;
