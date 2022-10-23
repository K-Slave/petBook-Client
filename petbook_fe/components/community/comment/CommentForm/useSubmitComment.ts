import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  CommentState,
  commentState,
  initialCommentState,
} from "@atoms/pageAtoms/community/commentState";

export default function useSubmitComment() {
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
    } else if (input.parentId !== undefined) {
      // post api, 새로운 대댓글
    } else {
      // post api, 새로운 댓글
    }
    console.log(input);
  }, [input]);

  return {
    onSubmit,
  };
}
