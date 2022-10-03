import React from "react";
import styled from "styled-components";
import { useChangeComment } from "./useChangeComment";

interface WriteCommentProps {
  initialComment?: string;
}

const WriteComment = ({ initialComment }: WriteCommentProps) => {
  const { onChange } = useChangeComment();
  return (
    <Textarea placeholder="당신의 의견을 남겨보세요!" onChange={onChange}>
      {initialComment ? initialComment : ""}
    </Textarea>
  );
};

export default WriteComment;

const Textarea = styled.textarea`
  border: none;
  resize: none;
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  font-family: Pretendard, sans-serif;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b1b1b1;
  }
  &::-moz-placeholder {
    color: #b1b1b1;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
