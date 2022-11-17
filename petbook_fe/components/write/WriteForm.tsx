import QuillWrapper from "@components/common/Editor/QuillWrapper";
import { ChangeEventHandler } from "react";
import { useSetRecoilState } from "recoil";
import writeState from "../../atoms/pageAtoms/community/writeState";
import {
  WriteEditorDiv,
  WriteTitleInput,
  WriteFormSection,
  WriteGuideDiv,
} from "./styled/styledWriteForm";

const WriteForm = () => {
  return (
    <WriteFormSection>
      <WriteForm.Input />
      <WriteForm.Guide />
      <WriteForm.Editor />
    </WriteFormSection>
  );
};

const Input = () => {
  const setWrite = useSetRecoilState(writeState);
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setWrite((write) => ({ ...write, inputTitle: e.target.value }));
  };

  return (
    <WriteTitleInput
      className="Write__Input default"
      placeholder="제목을 입력하세요"
      onChange={onChange}
    />
  );
};

const Guide = () => {
  return <WriteGuideDiv className="Write__Guide" />;
};

const Editor = () => {
  const setWrite = useSetRecoilState(writeState);
  const onChange = (value: string) => {
    setWrite((write) => ({ ...write, inputContent: value }));
  };

  return (
    <WriteEditorDiv className="">
      <QuillWrapper
        theme="snow"
        onChange={onChange}
        placeholder={`내용을 입력하세요\n\n\n* 등록한 글은 커뮤니티에서 사용중인 닉네임으로 등록됩니다.`}
      />
    </WriteEditorDiv>
  );
};

WriteForm.Input = Input;
WriteForm.Guide = Guide;
WriteForm.Editor = Editor;

export default WriteForm;
