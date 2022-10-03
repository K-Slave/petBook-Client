import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  CommentState,
  commentState,
} from "../../../../atoms/componentAtoms/community/commentState";

export const useSubmitComment = () => {
  const setComment = useSetRecoilState(commentState);
  const [input, setInput] = useState<CommentState>({
    comment: "",
    id: undefined,
  });
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setComment((comment) => {
      setInput(comment);
      return comment;
    });
  };

  useEffect(() => {
    if (!input.comment) return; // form validation
    if (input.id !== undefined) {
      // patch api
    } else {
      // post api
    }
    console.log(input);
  }, [input]);

  return {
    onSubmit,
  };
};
