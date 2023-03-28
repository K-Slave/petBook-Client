import styled from "styled-components";
import CategoryContainer from "@containers/write/CategoryContainer";
import localConsole from "@lib/utils/localConsole";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import WriteForm from "@components/write/WriteForm";
import WriteImgAttach from "@components/write/WriteImgAttach";
import WriteHashTags from "@components/write/WriteHashTags";
import WriteSubmit from "@components/write/WriteSubmit";
import styles from "../../../styles/Write.module.scss";
import { articleRequest, imgRequest } from "@lib/API/petBookAPI";
import { createRequest } from "@lib/hooks/common/useResource";
import { NextPageWithResources } from "@lib/queries";
import { CATEGORY_LIST } from "@lib/queries/category";

// 1. 서버 사이드에서 가져올 리소스 정의하기
// 정의된 순서에서 이미 데이터를 가지고 내려온 상태임.

export const ARTICLE_CREATE = createRequest({
  key: ["ARTICLE_CREATE"],
  requester: articleRequest.article_create,
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

const Write: NextPageWithResources = (pageProps: any) => {
  return (
    <WriteMain className={`Content ${styles.Write__Page}`}>
      <CategoryContainer />
      <WriteForm />
      <WriteImgAttach />
      <WriteHashTags />
      <WriteSubmit />
    </WriteMain>
  );
};

// 2. 페이지에서 사용할 리소스 명시하기

Write.requiredResources = [CATEGORY_LIST];

export default Write;
