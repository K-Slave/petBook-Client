/* eslint-disable react/jsx-indent */
import categoryState from "@atoms/pageAtoms/community/categoryState";
import { CategoryListResponse } from "@lib/API/petBookAPI/types/categoryRequestSpr";
import { CATEGORY_LIST } from "@pages/community";
import { useQuery } from "react-query";
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
  let categories: CategoryListResponse = [];
  const { data, status } = useQuery(
    CATEGORY_LIST.key,
    () => CATEGORY_LIST.fetcher(),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );
  if (status === "success") {
    categories = [{ id: 0, name: "전체" }, ...data.data];
  }
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryState);
  return (
    <Wrapper>
      {status === "success"
        ? categories.map((category) => (
            <FilterButton
              selected={category.id === selectedCategory.id}
              key={category.id}
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </FilterButton>
          ))
        : null}
    </Wrapper>
  );
};

export default CategoryFilter;
