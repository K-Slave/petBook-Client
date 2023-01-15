import { NextPage, NextPageContext } from "next";
import styled from "styled-components";
import { articleRequest, commentRequest } from "@lib/API/petBookAPI";
import { createRequest } from "@lib/hooks/common/useResource";
import BackButton from "@components/community/BackButton";
import ArticleContainer from "@containers/article/ArticleContainer";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import { getHttpOnlyCookie } from "@lib/utils/httpOnlyCookie";
import { createContext, useEffect } from "react";

export const ARTICLE_ITEM = {
  key: ["ARTICLE_ITEM"],
  fetcher: articleRequest.article_item,
};

export const ARTICLE_CREATE_LIKE = createRequest({
  key: ["ARTICLE_CREATE_LIKE"],
  requester: articleRequest.article_create_like,
});

export const ARTICLE_DELETE_LIKE = createRequest({
  key: ["ARTICLE_DELETE_LIKE"],
  requester: articleRequest.article_delete_like,
});

export const COMMENT_LIST = {
  key: ["COMMENT_LIST"],
  fetcher: commentRequest.comment_list,
};

export const COMMENT_CREATE = createRequest({
  key: ["COMMENT_CREATE"],
  requester: commentRequest.comment_create,
});

export const COMMENT_UPDATE = createRequest({
  key: ["COMMENT_UPDATE"],
  requester: commentRequest.comment_update,
});

export const COMMENT_DELETE = createRequest({
  key: ["COMMENT_DELETE"],
  requester: commentRequest.comment_delete,
});

export const COMMENT_CREATE_LIKE = createRequest({
  key: ["COMMENT_CREATE_LIKE"],
  requester: commentRequest.comment_create_like,
});

export const COMMENT_DELETE_LIKE = createRequest({
  key: ["COMMENT_DELETE_LIKE"],
  requester: commentRequest.comment_delete_like,
});

export type CreateLikeResource =
  | typeof ARTICLE_CREATE_LIKE
  | typeof COMMENT_CREATE_LIKE;
export type DeleteLikeResource =
  | typeof ARTICLE_DELETE_LIKE
  | typeof COMMENT_DELETE_LIKE;

type PetbookPage = NextPage<{
  token: string | null;
}> & {
  requiredResources?:
    | [typeof ARTICLE_ITEM]
    | [typeof ARTICLE_ITEM, typeof COMMENT_LIST];
};

export const tokenContext = createContext<string | null>(null);

const ArticleDetail: PetbookPage = ({ token }) => {
  useEffect(() => {
    if (token) {
      sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, [token]);
  return (
    <Main>
      <BackButton position="start" />
      <tokenContext.Provider value={token}>
        <ArticleContainer />
      </tokenContext.Provider>
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
}> => {
  const token = await getHttpOnlyCookie({ ctx, key: "petBookUser" });
  if (token) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  return {
    token: token === undefined || token === "" ? null : token,
  };
};
ArticleDetail.requiredResources = [ARTICLE_ITEM, COMMENT_LIST];

export default ArticleDetail;
