import Link from "next/link";
import styled from "styled-components";

const WriteButton = () => {
  return (
    <Link href={"/community/write"} passHref>
      <Button>글쓰기</Button>
    </Link>
  );
};

export default WriteButton;

const Button = styled.a`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 30px;
  right: 30px;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #ff2e00;
  color: #fff;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
`;
