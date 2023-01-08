import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import navigator from "@lib/modules/navigator";
import localConsole from "@lib/utils/localConsole";
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

  localConsole?.log(articleMutation.status, "articleMutation.status");

  const setWrite = useSetRecoilState(writeState);

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    setWrite((write) => {
      const asyncWrite = {
        ...write,
      };

      const imgPromise = async () => {
        const mutateState = await imgMutation.mutateAsync({
          header: multipartHeader,
          body: asyncWrite.inputFile,
        });

        return mutateState.data;
      };

      const articlePromise = async (imgId?: number | number[]) => {
        const mutateState = await articleMutation.mutateAsync({
          body: {
            title: asyncWrite.inputTitle,
            content: asyncWrite.inputContent,
            categoryId: asyncWrite.selectedCategory.idx + 1,
            tags: asyncWrite.inputHash,
            imageIds: imgId ? (Array.isArray(imgId) ? imgId : [imgId]) : [],
          },
        });

        return mutateState.data as ArticleResponse;
      };

      const defaultSubmit = (imgId?: number | number[]) => {
        articlePromise(imgId)
          .then((articleRes) => {
            navigator(`/community/list/${articleRes.id}`);
          })
          .catch((err) => localConsole?.error(err));
      };

      const withImgSubmitRun = () => {
        imgPromise()
          .then((imgRes) => {
            localConsole?.log(imgRes, "imgRes");
            defaultSubmit(imgRes.id);
          })
          .catch((err) => localConsole?.error(err));
      };

      if (write.inputImg) {
        withImgSubmitRun();
      }

      if (!write.inputImg || write.inputImg.length === 0) {
        defaultSubmit();
      }

      return {
        ...write,
      };
    });
  };

  if (articleMutation.status === "success") {
    setWrite((write) => ({
      ...write,
      inputTitle: "",
      inputContent: "",
      inputHash: [],
      inputImg: [],
    }));
  }

  return <WriteSubmitButton onClick={onClick}>게시물 등록</WriteSubmitButton>;
};

WriteSubmit.Submit = Submit;

export default WriteSubmit;
