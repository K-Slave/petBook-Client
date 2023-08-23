import styled from "styled-components";
import BackButton from "@components/community/BackButton";
import RecommendWriteSection from "@components/community/RecommendWriteSection";
import ArticleContainer from "@containers/article/ArticleContainer";
import { NextPageWithOptions } from "@lib/queries";
import { ARTICLE_DETAIL } from "@lib/resources/articleResource";
import { COMMENT_LIST } from "@lib/resources/commentResource";
import commonServerSideProps from "@lib/server/commonServerSideProps";
import RecommendWriteList from "@components/community/RecommendWriteList";

const ArticleDetail: NextPageWithOptions = () => {
  return (
    <>
      <Main>
        <BackButton position="start" />
        <ArticleContainer />
        <BackButton position="end" />
      </Main>
      <RecommendWriteSection title="이런 글은 어때요?">
        <RecommendWriteList />
      </RecommendWriteSection>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  margin: 0 auto;
  padding: 52px 35px;
  padding: 3.25rem 2.1875rem;
  max-width: 83.125rem;
`;

export const getServerSideProps = commonServerSideProps([
  ARTICLE_DETAIL,
  COMMENT_LIST,
]);

export default ArticleDetail;
