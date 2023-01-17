import { NextPage, NextPageContext } from "next";
import styled from "styled-components";
import { articleRequest, commentRequest } from "@lib/API/petBookAPI";
import BackButton from "@components/community/BackButton";
import ArticleContainer from "@containers/article/ArticleContainer";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import { getHttpOnlyCookie } from "@lib/utils/httpOnlyCookie";
import { createContext, useEffect } from "react";
import jwtDecode from "jwt-decode";

export const ARTICLE_ITEM = {
  key: ["ARTICLE_ITEM"],
  fetcher: articleRequest.article_item,
};

export const COMMENT_LIST = {
  key: ["COMMENT_LIST"],
  fetcher: commentRequest.comment_list,
};

type PetbookPage = NextPage<{
  token: string | null;
  userId: number | null;
}> & {
  requiredResources?:
    | [typeof ARTICLE_ITEM]
    | [typeof ARTICLE_ITEM, typeof COMMENT_LIST];
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
  const token = await getHttpOnlyCookie({ ctx, key: "petBookUser" });
  if (token) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    const { id: userId } = jwtDecode<{ id: number }>(token);
    return {
      token,
      userId
    };
  }
  return {
    token: null,
    userId: null
  };
};
ArticleDetail.requiredResources = [ARTICLE_ITEM, COMMENT_LIST];

export default ArticleDetail;
