import { GetServerSideProps } from "next";
import styled from "styled-components";
import WriteForm from "@components/write/WriteForm";
import WriteHashTags from "@components/write/WriteHashTags";
import WriteImgAttach from "@components/write/WriteImgAttach";
import WriteSubmit from "@components/write/WriteSubmit";
import CategoryContainer from "@containers/write/CategoryContainer";
import { NextPageWithOptions } from "@lib/queries";
import { CATEGORY_LIST } from "@lib/resources/commonResource";
import commonServerSideProps from "@lib/server/commonServerSideProps";

// 1. 서버 사이드에서 가져올 리소스 정의하기
// 정의된 순서에서 이미 데이터를 가지고 내려온 상태임.

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

const Write: NextPageWithOptions = (pageProps: any) => {
  return (
    <WriteMain>
      <CategoryContainer />
      <WriteForm />
      <WriteImgAttach />
      <WriteHashTags />
      <WriteSubmit />
    </WriteMain>
  );
};

export const getServerSideProps: GetServerSideProps = commonServerSideProps([
  CATEGORY_LIST,
]);
export default Write;
