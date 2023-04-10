import styled from "styled-components";
import BackButton from "@components/community/BackButton";
import ArticleContainer from "@containers/article/ArticleContainer";
import { WithResourcesServerSideProps } from "@lib/server/getServerSidePropsWrapper";
import { ARTICLE_DETAIL } from "@lib/queries/article";
import { COMMENT_LIST } from "@lib/queries/comment";
import type { NextPageWithResources } from "@lib/queries";

const ArticleDetail: NextPageWithResources = () => {
  return (
    <Main>
      <BackButton position="start" />
      <ArticleContainer />
      <BackButton position="end" />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1330px;
  width: 100%;
  margin: 0 auto;
  padding: 52px 35px;
`;

export const getServerSideProps = WithResourcesServerSideProps([
  ARTICLE_DETAIL,
  COMMENT_LIST,
]);

// ArticleDetail.requiredResources = [ARTICLE_DETAIL, COMMENT_LIST];

export default ArticleDetail;
