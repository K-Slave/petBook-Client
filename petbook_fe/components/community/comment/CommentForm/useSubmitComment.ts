import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { commentState } from "../../../../atoms/componentAtoms/community/commentState";

export const useSubmitComment = () => {
  const setComment = useSetRecoilState(commentState);
  const [input, setInput] = useState({ comment: "" });
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setComment((comment) => {
      setInput(comment);
      return comment;
    });
  };

  useEffect(() => {
    if (!input.comment) return; // form validation
    // post or api 호출
    console.log(input.comment);
  }, [input]);

  return {
    onSubmit,
  };
};
