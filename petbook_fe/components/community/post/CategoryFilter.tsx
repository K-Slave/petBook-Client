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

interface Props {
  selectedCategory: number;
  onSelectCategory: (key: number) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: Props) => {
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
