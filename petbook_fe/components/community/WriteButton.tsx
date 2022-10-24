import Link from "next/link";
import styled from "styled-components";

const StyledWriteButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 54px;
  height: 54px;

  border-radius: 50%;

  background-color: #ff2e00;
  color: #fff;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
`;

const WriteButton = () => {
  return (
    <Link href="/community/write" passHref>
      <StyledWriteButton>글쓰기</StyledWriteButton>
    </Link>
  );
};

export default WriteButton;
