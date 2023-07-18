import styled from "styled-components";
import BackButton from "@components/community/BackButton";
import ArticleContainer from "@containers/article/ArticleContainer";
import { ARTICLE_DETAIL } from "@lib/resources/articleResource";
import { COMMENT_LIST } from "@lib/resources/commentResource";
import commonServerSideProps from "@lib/server/commonServerSideProps";
import { NextPageWithOptions } from "@lib/queries";
import RecommendWriteList from "@components/community/RecommendWriteList";
import RecommendWriteSection from "@components/community/RecommendWriteSection";

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
  max-width: 83.125rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  margin: 0 auto;
  padding: 3.25rem 2.1875rem;
`;

export const getServerSideProps = commonServerSideProps([
  ARTICLE_DETAIL,
  COMMENT_LIST,
]);

export default ArticleDetail;
