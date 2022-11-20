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

  const setWrite = useSetRecoilState(writeState);

  // setWrite((write) => {
  //   imgMutation
  //     .mutateAsync({
  //       header: multipartHeader,
  //       body: write.inputFile,
  //     })
  //     .then(() => {
  //       articleMutation.mutate({
  //         body: {
  //           title: write.inputTitle,
  //           content: write.inputContent,
  //           categoryId: write.selectedCategory.idx + 1,
  //           tags: write.inputHash,
  //         },
  //       });

  //       setWrite((writes) => {
  //         return {
  //           ...writes,
  //           inputTitle: "",
  //           inputContent: "",
  //           inputHash: [],
  //           inputImg: [],
  //         };
  //       });
  //     })
  //     .catch(() => {});

  //   return {
  //     ...write,
  //   };
  // });
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

      const articlePromise = async () => {
        const mutateState = await articleMutation.mutateAsync({
          body: {
            title: asyncWrite.inputTitle,
            content: asyncWrite.inputContent,
            categoryId: asyncWrite.selectedCategory.idx + 1,
            tags: asyncWrite.inputHash,
          },
        });

        return mutateState.data as ArticleResponse;
      };

      const submitRun = () => {
        imgPromise()
          .then((imgRes) => {
            localConsole?.log(imgRes, "imgRes");
            articleRun();
          })
          .catch((err) => localConsole?.error(err));
      };

      const articleRun = () => {
        articlePromise()
          .then((articleRes) => {
            navigator(`/community/${articleRes.id}`);
          })
          .catch((err) => localConsole?.error(err));
      };

      submitRun();

      return {
        ...write,
        inputTitle: "",
        inputContent: "",
        inputHash: [],
        inputImg: [],
      };
    });
  };

  return <WriteSubmitButton onClick={onClick}>게시물 등록</WriteSubmitButton>;
};

WriteSubmit.Submit = Submit;

export default WriteSubmit;
