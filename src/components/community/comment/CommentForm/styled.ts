import styled from "styled-components";

export const CommentFormBox = styled.form`
  position: relative;
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

export const CommentFormButton = styled.button`
  width: 120px !important;
  align-self: flex-end;
  font-weight: 500 !important;
  font-size: 1rem !important;
`;

export const CommentFormTextarea = styled.textarea`
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

export const RectangleBoxDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px 0;
  transform: translateX(-50%);
  & > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

export const Rectangle = styled.div`
  width: 20px;
  height: 10px;
  background-color: var(--black_06);
  border-radius: 20px;
`;
