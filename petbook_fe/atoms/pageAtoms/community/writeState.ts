import { atom } from "recoil";

export interface WriteStateType {
  selectedCategory: {
    idx: number;
    name: string;
  };
  inputTitle: string;
  inputContent: string;
  inputHash: string[];
  inputImg: string[];
  inputFile: File | undefined;
}

const writeState = atom<{
  selectedCategory: {
    idx: number;
    name: string;
  };
  inputTitle: string;
  inputContent: string;
  inputHash: string[];
  inputImg: string[];
  inputFile: File | undefined;
}>({
  key: "writeState",
  default: {
    selectedCategory: {
      idx: 0,
      name: "",
    },
    inputTitle: "",
    inputContent: "",
    inputHash: [],
    inputImg: [],
    inputFile: undefined,
  },
});

export default writeState;
