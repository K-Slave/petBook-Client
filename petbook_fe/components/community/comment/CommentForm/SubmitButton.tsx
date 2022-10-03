import styled from "styled-components";
import { useSubmitComment } from "./useSubmitComment";

const SubmitButton = () => {
  const { onSubmit } = useSubmitComment();
  return (
    <Button type="submit" onClick={onSubmit}>
      등록
    </Button>
  );
};

export default SubmitButton;

const Button = styled.button`
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
