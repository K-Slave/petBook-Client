import { atom } from "recoil";

export interface CommentState {
  content: string;
  commentId: number | null;
  parentId: number | null;
}

const commentState = atom<CommentState>({
  key: "commentState",
  default: {
    content: "",
    commentId: null,
    parentId: null,
  },
});

export default commentState;
