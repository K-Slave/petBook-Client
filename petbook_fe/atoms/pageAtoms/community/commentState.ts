import { atom } from "recoil";

export interface CommentState {
  comment: string;
  id?: number;
  parentId?: number;
}

export const initialCommentState = {
  comment: "",
  id: undefined,
  parentId: undefined,
};

export const commentState = atom<CommentState>({
  key: "commentState",
  default: initialCommentState,
});
