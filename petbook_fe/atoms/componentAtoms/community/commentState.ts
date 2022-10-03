import { atom } from "recoil";

export interface CommentState {
  comment: string;
  id?: number;
  parentId?: number;
}

export const commentState = atom<CommentState>({
  key: "commentState",
  default: {
    comment: "",
    id: undefined,
    parentId: undefined,
  },
});
