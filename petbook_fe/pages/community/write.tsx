import { NextPage } from "next";
import styled from "styled-components";
import CategoryContainer from "@containers/write/CategoryContainer";
import FormContainer from "@containers/write/FormContainer";
import ImgAttachContainer from "@containers/write/ImgAttachContainer";
import HashTagsContainer from "@containers/write/HashTagsContainer";
import SubmitContainer from "@containers/write/SubmitContainer";
import {
  createRequest,
  createResource,
} from "../../lib/hooks/common/useResource";
import {
  articleRequest,
  categorySprRequest,
  imgRequest,
} from "../../lib/API/petBookAPI";

// 1. 서버 사이드에서 가져올 리소스 정의하기
// 정의된 순서에서 이미 데이터를 가지고 내려온 상태임.

export const ARTICLE_CREATE = createRequest({
  key: "ARTICLE_CREATE",
  requester: articleRequest.article_create,
});

export const CATEGORY_LIST = createResource({
  key: "CATEGORY_LIST",
  fetcher: categorySprRequest.category_list,
});

export const IMG_CREATE = createRequest({
  key: "IMG_CREATE",
  requester: imgRequest.img_create,
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
  return (
    <WriteMain className="Content">
      <CategoryContainer />
      <FormContainer />
      <ImgAttachContainer />
      <HashTagsContainer />
      <SubmitContainer />
    </WriteMain>
  );
};

// 2. 페이지에서 사용할 리소스 명시하기

type WritePageType = NextPage & {
  requiredResources?: [typeof CATEGORY_LIST];
};

const WritePage: WritePageType = Write;
WritePage.requiredResources = [CATEGORY_LIST];

export default WritePage;
