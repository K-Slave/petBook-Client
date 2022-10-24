import styled from "styled-components";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";

const ArticleFilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const ArticleFilter = () => {
  return (
    <ArticleFilterDiv>
      <CategoryFilter />
      <SortFilter />
    </ArticleFilterDiv>
  );
};

export default ArticleFilter;
