import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  CommentState,
  commentState,
  initialCommentState,
} from "../../../../atoms/componentAtoms/community/commentState";

export const useSubmitComment = () => {
  const setComment = useSetRecoilState(commentState);
  const [input, setInput] = useState<CommentState>(initialCommentState);
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
      if (input.parentId !== undefined) {
        // 새로운 대댓글
      } else {
        // 새로운 댓글
      }
    }
    console.log(input);
  }, [input]);

  return {
    onSubmit,
  };
};
