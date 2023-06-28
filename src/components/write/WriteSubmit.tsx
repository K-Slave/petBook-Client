import useWriteSubmit from "@lib/hooks/write/useWriteSubmit";
import { WriteSubmitSection } from "./styled/WriteSubmit.style";
import Button from "@/stories/common/Button";

const WriteSubmit = () => {
  return (
    <WriteSubmitSection>
      <WriteSubmit.Submit />
    </WriteSubmitSection>
  );
};

const Submit = () => {
  const { onClick } = useWriteSubmit();

  return (
    <Button variant="primary" width="400px" onClick={onClick}>
      게시물 등록
    </Button>
  );
};

WriteSubmit.Submit = Submit;

export default WriteSubmit;
