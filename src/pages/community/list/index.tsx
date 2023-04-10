import {
  CategoryNavDiv,
  CategoryNavButton,
} from "@components/community/CategoryNav/styled";
import WriteButton from "@components/community/WriteButton";
import styled from "styled-components";
import ArticleListContainer from "@containers/article/ArticleListContainer";
import { WithResourcesServerSideProps } from "@lib/server/getServerSidePropsWrapper";
import { CATEGORY_LIST } from "@lib/queries/category";
import { ARTICLE_LIST, ARTICLE_SEARCH } from "@lib/queries/article";

const ArticleListPage = () => {
  return (
    <Main>
      <ArticleListContainer />
      <WriteButton />
    </Main>
  );
};

export const getServerSideProps = WithResourcesServerSideProps([
  ARTICLE_LIST,
  ARTICLE_SEARCH,
  CATEGORY_LIST,
]);

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
