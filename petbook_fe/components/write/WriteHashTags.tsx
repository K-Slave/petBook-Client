import {
  WriteFormInput,
  WriteHashTagsSection,
} from "./styled/styledWriteHashTags";

const WriteHashTags = () => {
  return (
    <WriteHashTagsSection>
      <WriteHashTags.Title />
      <WriteHashTags.Input />
    </WriteHashTagsSection>
  );
};

const Title = () => {
  return <p className="Hash__Tag__Title">해시태그</p>;
};

const Input = () => {
  return (
    <WriteFormInput
      className="Hash__Tag__Input"
      placeholder="# 입력 (최대 5개)"
    />
  );
};

WriteHashTags.Title = Title;
WriteHashTags.Input = Input;

export default WriteHashTags;
