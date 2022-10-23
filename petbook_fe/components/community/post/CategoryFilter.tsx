import styled, { css } from "styled-components";

const CATEGORIES = [
  "전체",
  "질문과 답변",
  "잡담",
  "나눔활동",
  "정보공유",
  "실종신고",
  "기타",
];

const selectedStyle = css`
  background-color: #000;
  color: #fff;
  font-weight: 700;
  padding: 8px 22px;
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
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
`;

interface CategoryFilterProps {
  selectedCategory: number;
  onSelectCategory: (key: number) => void;
}

const CategoryFilter = ({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <Wrapper>
      {CATEGORIES.map((category, index) => (
        <FilterButton
          selected={index === selectedCategory}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          onClick={() => onSelectCategory(index)}
        >
          {category}
        </FilterButton>
      ))}
    </Wrapper>
  );
};

export default CategoryFilter;
