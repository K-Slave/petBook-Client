/* eslint-disable react/jsx-indent */
import categoryState from "@atoms/pageAtoms/community/categoryState";
import { CategoryListResponse } from "@lib/API/petBookAPI/types/categoryRequestSpr";
import useResource from "@lib/hooks/useResource";
import { CATEGORY_LIST } from "@pages/community";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";

const selectedStyle = css`
  padding: 8px 22px;

  background-color: #000;

  font-weight: 700;
  color: #fff;
`;

const notSelectedStyle = css`
  color: #000;
`;

const CategoryFilterDiv = styled.div`
  display: flex;
  gap: 50px;
`;

const CategoryFilterButton = styled.button<{ selected: boolean }>`
  ${({ selected }) => (selected ? selectedStyle : notSelectedStyle)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 20px;

  font-size: 20px;
`;

const CategoryFilter = () => {
  let categories: CategoryListResponse = [];
  const { data, status } = useResource(CATEGORY_LIST);
  if (status === "success") {
    categories = [{ id: 0, name: "전체" }, ...data.data];
  }
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryState);
  return (
    <CategoryFilterDiv>
      {status === "success"
        ? categories.map((category) => (
            <CategoryFilterButton
              selected={category.id === selectedCategory.id}
              key={category.id}
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </CategoryFilterButton>
          ))
        : null}
    </CategoryFilterDiv>
  );
};

export default CategoryFilter;
