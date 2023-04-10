import PencilEditIcon from "@components/common/icon/PencilEdit";
import Link from "next/link";
import { StyledWriteButton } from "./styled";

const WriteButton = () => {
  return (
    <Link href="/community/write" passHref>
      <StyledWriteButton>
        <PencilEditIcon />
        글쓰기
      </StyledWriteButton>
    </Link>
  );
};

export default WriteButton;
