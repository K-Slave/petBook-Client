import styled from "styled-components";
import WriteComment from "./WriteComment";
import SubmitButton from "./SubmitButton";
import UserInfo from "./UserInfo";

interface CommentFormProps {
  initialComment: string;
}

const CommentForm = ({ initialComment }: CommentFormProps) => {
  return (
    <Form>
      <UserInfo />
      <WriteComment initialComment={initialComment} />
      <SubmitButton />
    </Form>
  );
};

export default CommentForm;

CommentForm.defaultProps = {
  initialComment: "",
};

const Form = styled.form`
  width: 100%;
  height: 175px;
  background: #ffffff;
  border: 1px solid #f5edde;
  border-radius: 16px;
  padding: 32px 30px 24px 40px;
  display: flex;
  flex-direction: column;
`;
