import React from "react";
import { useSetRecoilState } from "recoil";
import { commentState } from "@atoms/pageAtoms/community/commentState";

export default function useChangeComment() {
  const setComment = useSetRecoilState(commentState);
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setComment((comment) => ({ ...comment, comment: value }));
  };

  return {
    onChange,
  };
}
