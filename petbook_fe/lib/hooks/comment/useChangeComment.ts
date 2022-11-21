import commentState from "@atoms/pageAtoms/community/commentState";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function useChangeComment(initialContent: string) {
  const setComment = useSetRecoilState(commentState);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setComment((comment) => ({ ...comment, content: value }));
  };

  useEffect(() => {
    if (initialContent !== "") {
      setComment((comment) => ({ ...comment, content: initialContent }));
    }
  }, [initialContent]);
  return { onChange };
}
