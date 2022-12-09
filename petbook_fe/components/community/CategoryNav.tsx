import useCategories from "@lib/hooks/article/useCategories";
import Link from "next/link";
import styled, { css } from "styled-components";

const CategoryNav = () => {
  const { categories, status } = useCategories({ all: true });
  return (
    <CategoryNavDiv>
      {status === "success"
        ? categories.map((category) => (
            <Link href="/community" passHref key={category.id}>
              <CategoryNavButton name={category.name}>
                {category.name}
              </CategoryNavButton>
            </Link>
          ))
        : null}
    </CategoryNavDiv>
  );
};

const allButtonStyle = css`
    background-color: var(--black_01);
    color: white !important;
    font-weight: bold;
`;

const otherButtonStyle = css`
    background-color: white;
`;

const CategoryNavButton = styled.button<{ name: string }>`
  ${({ name }) => (name === "전체" ? allButtonStyle : otherButtonStyle)}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 160px;
  height: 52px;
  font-size: 16px !important;
  border-radius: 8px;
`;

const CategoryNavDiv = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 31px;
`;

export default CategoryNav;
