import {
  CategoryNavDiv,
  CategoryNavButton,
} from "@components/community/CategoryNav/styled";
import WriteButton from "@components/community/WriteButton";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import { articleRequest, categorySprRequest } from "@lib/API/petBookAPI";
import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequest";
import { createResource } from "@lib/hooks/common/useResource";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import ArticleListContainer from "@containers/article/ArticleListContainer";
import { dehydrate } from "@tanstack/react-query";
import createQueryClient from "@lib/utils/createQueryClient";
import getToken from "@lib/server/parse/getToken";

export const createArticleListResource = ({
  category,
  page,
  searchText,
}: {
  category: CategoryItem;
  page: number;
  searchText?: string;
}): {
  key: [string, ...any[]];
  fetcher: () =>
    | ReturnType<typeof articleRequest.article_list>
    | ReturnType<typeof articleRequest.article_search>;
} => {
  if (searchText) {
    return {
      key: ["ARTICLE_SEARCH", searchText, page],
      fetcher: () =>
        articleRequest.article_search({
          categoryId: null,
          page: page - 1,
          size: 20,
          searchText,
        }),
    };
  }
  return {
    key: ["ARTICLE_LIST", category.name, page],
    fetcher: () =>
      articleRequest.article_list({
        categoryId: category.id === 0 ? "" : category.id,
        page: page - 1,
        size: 20,
        popular: false,
      }),
  };
};

export const CATEGORY_LIST = createResource({
  key: ["CATEGORY_LIST"],
  fetcher: () => categorySprRequest.category_list(),
});

const ArticleListPage = ({
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    if (token) {
      sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, [token]);
  return (
    <Main>
      <ArticleListContainer />
      <WriteButton />
    </Main>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { token } = getToken(ctx, { decode: false });
  const queryClient = createQueryClient();
  const { query } = ctx;
  const page = Number(query.page);
  const searchText = query.query as string | undefined;
  const [name, id] = query.category
    ? (query.category as string).split("_")
    : ["전체", 0];
  const ARTICLE_LIST = createArticleListResource({
    category: { id: Number(id), name },
    searchText,
    page: Number.isNaN(page) ? 1 : page,
  });
  await queryClient.fetchQuery(CATEGORY_LIST.key, CATEGORY_LIST.fetcher);
  await queryClient.fetchQuery(ARTICLE_LIST.key, ARTICLE_LIST.fetcher);
  return {
    props: {
      token,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

const Main = styled.main`
  max-width: 1330px;
  width: 100%;
  margin: 0 auto;
  padding: 52px 35px;
  & > .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  h1 {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    color: var(--black_01);
    font-weight: 700;
    line-height: 50px;
    font-size: 34px;
    & > span:last-child {
      color: var(--black_05);
    }
  }

  ${CategoryNavDiv} {
    gap: 8px;
    margin: 20px 0 0 0;
  }
  ${CategoryNavButton} {
    width: 110px;
    height: 44px;
  }
`;

export default ArticleListPage;
