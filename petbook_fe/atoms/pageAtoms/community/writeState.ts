import { atom } from "recoil";

export interface WriteStateType {
  selectedCategory: number;
  inputTitle: string;
  inputContent: string;
  inputHash: string[];
}

const writeState = atom<{
  selectedCategory: number;
  inputTitle: string;
  inputContent: string;
  inputHash: string[];
}>({
  key: "writeState",
  default: {
    selectedCategory: 0,
    inputTitle: "",
    inputContent: "",
    inputHash: [],
  },
});

export default writeState;
