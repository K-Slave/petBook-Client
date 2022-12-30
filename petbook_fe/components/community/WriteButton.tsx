import Link from "next/link";
import styled from "styled-components";

const StyledWriteButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  width: 130px;
  height: 60px;
  border-radius: 40px;
  background-color: var(--primary);
  color: #fff;
  font-size: 18px;
  box-shadow: 0px 24px 16px -16px rgba(69, 66, 54, 0.25);
`;

const PencilIcon = styled.span`
  width: 20px;
  height: 20px;
  background: url("/img/common/pencil_edit.svg") no-repeat;
`;

const WriteButton = () => {
  return (
    <Link href="/community/write" passHref>
      <StyledWriteButton>
        <PencilIcon />
        글쓰기
      </StyledWriteButton>
    </Link>
  );
};

export default WriteButton;
