import commentState from "@atoms/pageAtoms/community/commentState";
import { useSetRecoilState } from "recoil";

export default function useChangeComment() {
  const setComment = useSetRecoilState(commentState);

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
