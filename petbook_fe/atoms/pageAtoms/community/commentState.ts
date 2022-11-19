import { atom } from "recoil";

interface CommentState {
  content: string;
  commentId: number | null;
  parentId: number;
}

const commentState = atom<CommentState>({
  key: "commentState",
  default: {
    content: "",
    commentId: null,
    parentId: 0,
  },
});

export default commentState;
