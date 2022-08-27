import styled from "styled-components";

const WriteButton = () => {
  return <Button>글쓰기</Button>;
};

export default WriteButton;

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #ff2e00;
  color: #fff;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
`;
