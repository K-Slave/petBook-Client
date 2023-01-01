import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequestSpr";
import useCategories from "@lib/hooks/article/useCategories";
import useActiveCategory from "@lib/hooks/article/useActiveCategory";
import navigator from "@lib/modules/navigator";
import getHrefWithCategory from "@lib/utils/gerHrefWithCategory";
import styled, { css } from "styled-components";

const CategoryNav = () => {
  const { categories, status } = useCategories({ all: true });
  const { categoryName } = useActiveCategory();
  const onClick = (category: CategoryItem) => () => {
    navigator(getHrefWithCategory(category), undefined, {
      shallow: true
    });
  };
  return (
    <CategoryNavDiv>
      {status === "success"
        ? categories.map((category) => (
              <CategoryNavButton
                key={category.id}
                onClick={onClick(category)}
                active={categoryName === category.name ? "true" : ""}
              >
                {category.name}
              </CategoryNavButton>
          ))
        : null}
    </CategoryNavDiv>
  );
};

const allButtonStyle = css`
  background-color: var(--black_01);
  color: var(--bg_white_02) !important;
  font-weight: bold;
`;

const otherButtonStyle = css`
  background-color: white;
  color: var(--black_01);
`;

export const CategoryNavButton = styled.button<{ active: string }>`
  ${({ active }) => (active ? allButtonStyle : otherButtonStyle)}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 110px;
  height: 52px;
  font-size: 16px !important;
  border-radius: 8px;
`;

export const CategoryNavDiv = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 31px;
`;

export default CategoryNav;
