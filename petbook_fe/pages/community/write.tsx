import { NextPage } from "next";
import styled from "styled-components";
import CategoryContainer from "@containers/write/CategoryContainer";
import FormContainer from "@containers/write/FormContainer";
import ImgAttachContainer from "@containers/write/ImgAttachContainer";
import HashTagsContainer from "@containers/write/HashTagsContainer";
import SubmitContainer from "@containers/write/SubmitContainer";
import localConsole from "@lib/utils/localConsole";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import {
  createRequest,
  createResource,
} from "../../lib/hooks/common/useResource";
import {
  articleRequest,
  categorySprRequest,
  imgRequest,
} from "../../lib/API/petBookAPI";
import styles from "../../styles/Write.module.scss";

// 1. 서버 사이드에서 가져올 리소스 정의하기
// 정의된 순서에서 이미 데이터를 가지고 내려온 상태임.

export const ARTICLE_CREATE = createRequest({
  key: ["ARTICLE_CREATE"],
  requester: articleRequest.article_create,
});

export const CATEGORY_LIST = createResource({
  key: ["CATEGORY_LIST"],
  fetcher: categorySprRequest.category_list,
});

export const IMG_CREATE = createRequest({
  key: ["IMG_CREATE"],
  requester: imgRequest.img_create,
});

const WriteMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  max-width: 1000px;
  height: auto;

  margin: 0 auto;
  padding: 0 10px;
`;

const Write: NextPage = (pageProps: any) => {
  localConsole?.log(
    sprPetBookClient?.defaults.headers.common,
    "sprPetBookClient"
  );

  return (
    <WriteMain className={`Content ${styles.Write__Page}`}>
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
