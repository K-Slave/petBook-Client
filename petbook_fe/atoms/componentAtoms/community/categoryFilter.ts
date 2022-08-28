import { atom } from "recoil";

export type CategoryFilterType = {
  categoryKeyword: string[];
};

const categoryFilterState = atom<{
  categoryKeyword: string[];
}>({
  key: "categoryFilterState",
  default: {
    categoryKeyword: [
      "질문과 답변",
      "잡담",
      "나눔활동",
      "정보공유",
      "실종신고",
      "기타",
    ],
  },
});

export default categoryFilterState;
