import { NextPage, NextPageContext } from "next";
import styled from "styled-components";
import { articleRequest, commentRequest } from "@lib/API/petBookAPI";
import BackButton from "@components/community/BackButton";
import ArticleContainer from "@containers/article/ArticleContainer";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import { getHttpOnlyCookie } from "@lib/utils/httpOnlyCookie";
import { createContext, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { CommentListRequest } from "@lib/API/petBookAPI/types/commentRequest";

export const getCommentListKey = (articleId: string): [string, string] => [
  "COMMENT_LIST",
  articleId,
];
export const createCommentListResouce = (
  articleId: CommentListRequest["params"]["articleId"]
) => ({
  key: getCommentListKey(String(articleId)),
  fetcher: (page = 0) =>
    commentRequest.comment_list({
      articleId,
      page: page === undefined ? 0 : page,
      size: 20,
    }),
});
export const createArticleResource = (articleId: string) => ({
  key: ["ARTICLE_ITEM", articleId] as [string, string],
  fetcher: () => articleRequest.article_item(`/${articleId}`),
});

type PetbookPage = NextPage<{
  token: string | null;
  userId: number | null;
}> & {
  requiredResources?: [
    ReturnType<typeof createArticleResource>,
    ReturnType<typeof createCommentListResouce>
  ];
};
export const userIdContext = createContext<number | null>(null);

const ArticleDetail: PetbookPage = ({ token, userId }) => {
  useEffect(() => {
    if (token) {
      sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, [token]);
  return (
    <Main>
      <BackButton position="start" />
      <userIdContext.Provider value={userId}>
        <ArticleContainer />
      </userIdContext.Provider>
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

ArticleDetail.getInitialProps = async (
  ctx: NextPageContext
): Promise<{
  token: string | null;
  userId: number | null;
}> => {
  const { query } = ctx;
  const articleId = query.articleId as string;
  const ARTICLE_ITEM = createArticleResource(articleId);
  const COMMENT_LIST = createCommentListResouce(Number(articleId));
  ArticleDetail.requiredResources = [ARTICLE_ITEM, COMMENT_LIST];
  const token = await getHttpOnlyCookie({ ctx, key: "petBookUser" });
  if (token) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    const user = jwtDecode<{ id: string }>(token);
    return {
      token,
      userId: Number(user.id),
    };
  }
  return {
    token: null,
    userId: null,
  };
};

export default ArticleDetail;
