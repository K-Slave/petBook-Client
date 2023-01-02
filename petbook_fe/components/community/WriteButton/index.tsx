import Link from "next/link";
import { StyledWriteButton, PencilIcon } from "./styled";

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
