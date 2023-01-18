import {
  CategoryNavDiv,
  CategoryNavButton,
} from "@components/community/CategoryNav/styled";
import WriteButton from "@components/community/WriteButton";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import { articleRequest, categorySprRequest } from "@lib/API/petBookAPI";
import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequestSpr";
import { createResource } from "@lib/hooks/common/useResource";
import { getHttpOnlyCookie } from "@lib/utils/httpOnlyCookie";
import { NextPage, NextPageContext } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import ArticleListContainer from "@containers/article/ArticleListContainer";

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
  fetcher: categorySprRequest.category_list,
});

type PetBookPage = NextPage<{
  token: string | null;
}> & {
  requiredResources?: [
    ReturnType<typeof createArticleListResource>,
    typeof CATEGORY_LIST
  ];
};

const ArticleListPage: PetBookPage = ({ token }) => {
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

ArticleListPage.getInitialProps = async (
  ctx: NextPageContext
): Promise<{ token: string | null }> => {
  const token = await getHttpOnlyCookie({ ctx, key: "petBookUser" });
  if (token) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  const { query } = ctx;
  const page = Number(query.page);
  const searchText = query.query as string | undefined;
  if (query.category) {
    const [name, id] = (query.category as string).split("_");
    ArticleListPage.requiredResources = [
      createArticleListResource({
        category: { id: Number(id), name },
        searchText,
        page: Number.isNaN(page) ? 1 : page,
      }),
      CATEGORY_LIST,
    ];
  } else {
    ArticleListPage.requiredResources = [
      createArticleListResource({
        category: { id: 0, name: "전체" },
        searchText,
        page: Number.isNaN(page) ? 1 : page,
      }),
      CATEGORY_LIST,
    ];
  }

  return {
    token: token === undefined || token === "" ? null : token,
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
