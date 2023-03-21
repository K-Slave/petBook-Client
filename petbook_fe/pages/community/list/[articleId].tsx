import styled from "styled-components";
import BackButton from "@components/community/BackButton";
import ArticleContainer from "@containers/article/ArticleContainer";
import { QueryClient } from "@tanstack/react-query";
import { WithResourcesServerSideProps } from "@lib/server/getServerSidePropsWrapper";
import { ARTICLE_DETAIL } from "@lib/resources/article";
import { COMMENT_LIST } from "@lib/resources/comment";
import type { NextPageWithResources } from "@lib/resources";

export const invalidateCommentList = async (
  queryClient: QueryClient,
  articleId: string
) => {
  await queryClient.invalidateQueries({
    queryKey: ["COMMENT_LIST", articleId],
  });
};

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
