import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import styled from "styled-components";
import { articleRequest, commentRequest } from "@lib/API/petBookAPI";
import BackButton from "@components/community/BackButton";
import ArticleContainer from "@containers/article/ArticleContainer";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import { createContext, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { CommentListRequest } from "@lib/API/petBookAPI/types/commentRequest";
import cookies from "next-cookies";
import { dehydrate } from "@tanstack/react-query";
import createQueryClient from "@lib/utils/createQueryClient";

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

export const userIdContext = createContext<number | null>(null);

const ArticleDetail = ({
  token,
  userId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const allCookies = cookies(ctx);
  const token = allCookies?.petBookUser;
  let user: { id: string } | null = null;
  if (token) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    user = jwtDecode<{ id: string }>(token);
  }

  const { query } = ctx;
  const articleId = query.articleId as string;
  const ARTICLE_ITEM = createArticleResource(articleId);
  const COMMENT_LIST = createCommentListResouce(Number(articleId));
  const queryClient = createQueryClient();
  await queryClient.fetchQuery(ARTICLE_ITEM.key, ARTICLE_ITEM.fetcher);
  await queryClient.fetchInfiniteQuery(COMMENT_LIST.key, () =>
    COMMENT_LIST.fetcher()
  );
  return {
    props: {
      token: token || null,
      userId: user ? Number(user.id) : null,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default ArticleDetail;
