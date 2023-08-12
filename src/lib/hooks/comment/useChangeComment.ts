import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import commentState, {
  CommentState,
} from "@atoms/pageAtoms/community/commentState";

export default function useChangeComment(initialState?: CommentState) {
  const setComment = useSetRecoilState(commentState);
  useEffect(() => {
    if (initialState) {
      setComment(initialState);
    }
  }, [initialState]);
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setComment((comment) => ({ ...comment, content: value }));
  };
  return { onChange };
}
