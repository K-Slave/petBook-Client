import categoryState from "@atoms/pageAtoms/community/categoryState";
import { useRecoilState } from "recoil";
import { BiSortAlt2 } from "react-icons/bi";
import useCategories from "@lib/hooks/useCategories";
import {
  ArticleFilterDiv,
  CategoryFilterButton,
  CategoryFilterDiv,
  SortFilterDiv,
} from "./styled/styledArticleFilter";

const ArticleFilter = () => {
  return (
    <ArticleFilterDiv>
      <ArticleFilter.CategoryFilter />
      <ArticleFilter.SortFilter />
    </ArticleFilterDiv>
  );
};

const CategoryFilter = () => {
  const { categories, status } = useCategories({ all: true });
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

const SortFilter = () => {
  return (
    <SortFilterDiv>
      <p>실시간</p>
      <button type="button">
        <BiSortAlt2 />
      </button>
    </SortFilterDiv>
  );
};

ArticleFilter.CategoryFilter = CategoryFilter;
ArticleFilter.SortFilter = SortFilter;

export default ArticleFilter;
