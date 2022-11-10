import { ARTICLE_CREATE } from "@pages/community/write";
import { MouseEventHandler } from "react";
import { useSetRecoilState } from "recoil";
import writeState from "../../atoms/pageAtoms/community/writeState";
import { useSetResource } from "../../lib/hooks/useResource";
import {
  WriteSubmitButton,
  WriteSubmitSection,
} from "./styled/styledWriteSubmit";

const WriteSubmit = () => {
  return (
    <WriteSubmitSection>
      <WriteSubmit.Submit />
    </WriteSubmitSection>
  );
};

const Submit = () => {
  const { mutate } = useSetResource(ARTICLE_CREATE);

  const setWrite = useSetRecoilState(writeState);

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    setWrite((write) => {
      mutate({
        title: write.inputTitle,
        content: write.inputContent,
        categoryId: write.selectedCategory,
        tags: write.inputHash,
      });

      return { ...write, inputTitle: "", inputContent: "" };
    });
  };

  return <WriteSubmitButton onClick={onClick}>게시물 등록</WriteSubmitButton>;
};

WriteSubmit.Submit = Submit;

export default WriteSubmit;
