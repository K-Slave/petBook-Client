import { atom } from "recoil";

export interface WriteStateType {
  selectedCategory: number;
  inputTitle: string;
  inputContent: string;
  inputHash: string[];
  inputImg: string[];
}

const writeState = atom<{
  selectedCategory: number;
  inputTitle: string;
  inputContent: string;
  inputHash: string[];
  inputImg: string[];
}>({
  key: "writeState",
  default: {
    selectedCategory: 0,
    inputTitle: "",
    inputContent: "",
    inputHash: [],
    inputImg: [],
  },
});

export default writeState;
