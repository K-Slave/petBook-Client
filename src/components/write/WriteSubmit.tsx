import loadingState from "@atoms/common/loadingState";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import { ImgCreateResponse } from "@lib/API/petBookAPI/types/imgRequest";
import useLoaderNavigate from "@lib/hooks/common/useLoaderNavigate";
import useWriteSubmit from "@lib/hooks/write/useWriteSubmit";
import localConsole from "@lib/utils/localConsole";
import { ARTICLE_CREATE, IMG_CREATE } from "@pages/community/write";
import { MouseEventHandler } from "react";
import { useSetRecoilState } from "recoil";
import writeState from "../../atoms/pageAtoms/community/writeState";
import { useSetResource } from "../../lib/hooks/common/useResource";
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
