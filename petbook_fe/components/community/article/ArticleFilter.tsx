import styled from "styled-components";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const ArticleFilter = () => {
  return (
    <Wrapper>
      <CategoryFilter />
      <SortFilter />
    </Wrapper>
  );
};

export default ArticleFilter;
