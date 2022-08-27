import styled from "styled-components";
import { useSelect } from "../useSelect";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";

const PostFilter = () => {
  const [selected, onSelectCategory] = useSelect(1);
  return (
    <Wrapper>
      <CategoryFilter
        selectedCategory={selected}
        onSelectCategory={onSelectCategory}
      />
      <SortFilter />
    </Wrapper>
  );
};

export default PostFilter;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;
