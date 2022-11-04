import styled from "styled-components";

const CommentFormBox = styled.form`
  width: 100%;
  height: 175px;
  background: #ffffff;
  border: 1px solid #f5edde;
  border-radius: 16px;
  padding: 32px 30px 24px 40px;
  display: flex;
  flex-direction: column;
`;

const StyledSubmitButton = styled.button`
  background: #eeeeee;
  border-radius: 21px;
  width: 67px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777777;
  align-self: flex-end;
`;

const UserInfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  p {
    font-size: 14px;
  }
`;

const UserInfoImg = styled.img`
  width: 20px;
  height: 20px;
  background-color: #d9d9d9;
  border-radius: 50%;
  object-fit: cover;
`;

const WriteCommentTextarea = styled.textarea`
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

export {
  CommentFormBox,
  StyledSubmitButton,
  UserInfoDiv,
  UserInfoImg,
  WriteCommentTextarea,
};
