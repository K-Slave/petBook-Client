import useWriteSubmit from "@lib/hooks/write/useWriteSubmit";
import {
  WriteSubmitButton,
  WriteSubmitSection,
} from "./styled/WriteSubmit.style";

const WriteSubmit = () => {
  return (
    <WriteSubmitSection>
      <WriteSubmit.Submit />
    </WriteSubmitSection>
  );
};

const Submit = () => {
  const { onClick } = useWriteSubmit();

  return <WriteSubmitButton onClick={onClick}>게시물 등록</WriteSubmitButton>;
};

WriteSubmit.Submit = Submit;

export default WriteSubmit;
