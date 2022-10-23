import { NextPage } from "next";
import styled from "styled-components";
import WriteForm from "@components/write/WriteForm";
import WriteImgSubmit from "@components/write/WriteImgSubmit";
import WriteHashTags from "@components/write/WriteHashTags";
import WriteSubmit from "@components/write/WriteSubmit";
import WriteContainer from "@containers/WriteContainer";
import { createRequest, createResource } from "../../lib/hooks/useResource";
import {
  articleRequest,
  boardRequest,
  categorySprRequest,
} from "../../lib/API/petBookAPI";

// 1. 서버 사이드에서 가져올 리소스 정의하기
// 정의된 순서에서 이미 데이터를 가지고 내려온 상태임.

export const BOARD_CREATE = createRequest({
  key: "BOARD_CREATE",
  requester: boardRequest.board_create,
});

export const ARTICLE_LIST = createResource({
  key: "ARTICLE_LIST",
  fetcher: articleRequest.article_list,
});

export const CATEGORY_LIST = createResource({
  key: "CATEGORY_LIST",
  fetcher: categorySprRequest.category_list,
});

const WriteMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  width: 100%;
  max-width: 1064px;
  height: auto;

  margin: 0 auto;
`;

const Write: NextPage = (pageProps) => {
  console.log(pageProps, "Write render");

  return (
    <WriteMain className="Content">
      <WriteContainer />
      <WriteForm />
      <WriteImgSubmit />
      <WriteHashTags />
      <WriteSubmit />
    </WriteMain>
  );
};

// 2. 페이지에서 사용할 리소스 명시하기

type WritePageType = NextPage & {
  requiredResources?: [typeof ARTICLE_LIST, typeof CATEGORY_LIST];
};

const WritePage: WritePageType = Write;
WritePage.requiredResources = [ARTICLE_LIST, CATEGORY_LIST];

export default WritePage;
