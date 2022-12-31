import ArticleList from "@components/community/ArticleList";
import CategoryNav from "@components/community/CategoryNav";
import WriteButton from "@components/community/WriteButton";
import { articleRequest, categorySprRequest } from "@lib/API/petBookAPI";
import useCategory from "@lib/hooks/article/useCategory";
import { createResource } from "@lib/hooks/common/useResource";
import { NextPage } from "next";
import styled from "styled-components";

export const ARTICLE_LIST = createResource({
  key: "ARTICLE_LIST",
  fetcher: articleRequest.article_list,
});

export const CATEGORY_LIST = createResource({
  key: "CATEGORY_LIST",
  fetcher: categorySprRequest.category_list
});

type PetBookPage = NextPage & {
  requiredResources?: [typeof ARTICLE_LIST, typeof CATEGORY_LIST]
}

const ArticleListPage: PetBookPage = () => {
  const { categoryName } = useCategory();
  return (
    <Main>
        <h1>{categoryName}</h1>
      <CategoryNav />
      <ArticleList />
      <WriteButton />
    </Main>
  );
};

ArticleListPage.requiredResources = [ARTICLE_LIST, CATEGORY_LIST];

const Main = styled.main`
    max-width: 1260px;
    width: 100%;
    margin: 52px auto;
    h1 {
      color: var(--black_01);
      font-weight: 700;
      line-height: 50px;
      font-size: 34px;
      margin-bottom: 20px;
    }
`;

export default ArticleListPage;
