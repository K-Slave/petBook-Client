import categoryState from "@atoms/pageAtoms/community/categoryState";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";

const CATEGORIES = [
  {
    id: 1,
    name: "질문과 답변",
  },
  {
    id: 2,
    name: "잡담",
  },
  {
    id: 3,
    name: "나눔활동",
  },
  {
    id: 4,
    name: "정보공유",
  },
];

const selectedStyle = css`
  padding: 8px 22px;

  background-color: #000;

  font-weight: 700;
  color: #fff;
`;

const notSelectedStyle = css`
  color: #000;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

const FilterButton = styled.button<{ selected: boolean }>`
  ${({ selected }) => (selected ? selectedStyle : notSelectedStyle)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 20px;

  font-size: 20px;
`;

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryState);
  return (
    <Wrapper>
      {CATEGORIES.map((category) => (
        <FilterButton
          selected={category.id === selectedCategory.id}
          key={category.id}
          onClick={() => setSelectedCategory(category)}
        >
          {category.name}
        </FilterButton>
      ))}
    </Wrapper>
  );
};

export default CategoryFilter;
