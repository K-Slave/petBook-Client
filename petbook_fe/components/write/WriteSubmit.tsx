import { ARTICLE_CREATE, IMG_CREATE } from "@pages/community/write";
import { MouseEventHandler } from "react";
import { useSetRecoilState } from "recoil";
import writeState from "../../atoms/pageAtoms/community/writeState";
import { useSetResource } from "../../lib/hooks/common/useResource";
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

const multipartHeader = { "Content-Type": "multipart/form-data" };

const Submit = () => {
  const articleMutation = useSetResource(ARTICLE_CREATE);
  const imgMutation = useSetResource(IMG_CREATE);

  const setWrite = useSetRecoilState(writeState);

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    setWrite((write) => {
      articleMutation.mutate({
        title: write.inputTitle,
        content: write.inputContent,
        categoryId: write.selectedCategory,
        tags: write.inputHash,
      });

      imgMutation.mutate({
        header: multipartHeader,
        body: write.inputFile,
      });

      return { ...write, inputTitle: "", inputContent: "" };
    });
  };

  return <WriteSubmitButton onClick={onClick}>게시물 등록</WriteSubmitButton>;
};

WriteSubmit.Submit = Submit;

export default WriteSubmit;
