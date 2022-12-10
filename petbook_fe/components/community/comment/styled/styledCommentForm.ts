import styled from "styled-components";

const CommentFormBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 140px;
  padding: 32px 30px 24px 40px;
  background: #ffffff;
  border: 1px solid var(--black_07);
  border-radius: 16px;
`;

const CommentFormButton = styled.button`
  width: 120px !important;
  align-self: flex-end;
  font-weight: 500 !important;
  font-size: 1rem !important;
`;
const CommentFormMainBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const CommentFormTextarea = styled.textarea`
  border: none;
  resize: none;
  width: 100%;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--black_05);
  }
  &::-moz-placeholder {
    color: var(--black_05);
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export {
  CommentFormBox,
  CommentFormButton,
  CommentFormTextarea,
  CommentFormMainBox,
};
