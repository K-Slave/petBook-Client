import { atom, selector, useRecoilValue } from "recoil";

export interface WriteStateType {
  selectedCategory: number;
  inputTitle: string;
  inputContent: string;
  inputHash: string[];
  inputImg: string[];
  inputFile: File | undefined;
}

const writeState = atom<{
  selectedCategory: number;
  inputTitle: string;
  inputContent: string;
  inputHash: string[];
  inputImg: string[];
  inputFile: File | undefined;
}>({
  key: "writeState",
  default: {
    selectedCategory: 0,
    inputTitle: "",
    inputContent: "",
    inputHash: [],
    inputImg: [],
    inputFile: undefined,
  },
});

export default writeState;
