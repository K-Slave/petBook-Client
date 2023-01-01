import ArticleList from "@components/community/ArticleList";
import CategoryNav, { CategoryNavButton, CategoryNavDiv } from "@components/community/CategoryNav";
import WriteButton from "@components/community/WriteButton";
import { articleRequest, categorySprRequest } from "@lib/API/petBookAPI";
import { ArticleListRequest } from "@lib/API/petBookAPI/types/articleRequest";
import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequestSpr";
import useActiveCategory from "@lib/hooks/article/useActiveCategory";
import { createResource } from "@lib/hooks/common/useResource";
import { NextPage, NextPageContext } from "next";
import styled from "styled-components";

const ARTICLE_LIST = createResource({
  key: "ARTICLE_LIST",
  fetcher: articleRequest.article_list,
});

export const createArticleListResource = ({ category, page }: { category: CategoryItem, page: number}) => {
  return {
    key: `${ARTICLE_LIST.key}_${category.name}_${page}`,
    fetcher: () => ARTICLE_LIST.fetcher({
      categoryId: category.id === 0 ? "" : category.id,
      page: page - 1,
      size: 20,
    }),
  };
};

export const CATEGORY_LIST = createResource({
  key: "CATEGORY_LIST",
  fetcher: categorySprRequest.category_list
});

type PetBookPage = NextPage & {
  requiredResources?: [ReturnType<typeof createArticleListResource>, typeof CATEGORY_LIST]
}

const ArticleListPage: PetBookPage = () => {
  const { categoryName } = useActiveCategory();
  return (
    <Main>
      <h1>{categoryName}</h1>
      <CategoryNav />
      <ArticleList />
      <WriteButton />
    </Main>
  );
};

ArticleListPage.getInitialProps = async (
  ctx: NextPageContext
) => {
  const { query } = ctx;
  const page = Number(query.page);
  const [id, name] = (query.category as string).split("_");
  ArticleListPage.requiredResources = [
    createArticleListResource({
      category: { id: Number(id), name },
      page: Number.isNaN(page) ? 1 : page
    }),
    CATEGORY_LIST
  ];
};

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
    ${CategoryNavDiv} {
      gap: 8px;
    }
    ${CategoryNavButton} {
      width: 110px;
      height: 44px;
    }
`;

export default ArticleListPage;
