import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequest";
import useCategories from "@lib/hooks/article/useCategories";
import useActiveCategory from "@lib/hooks/article/useActiveCategory";
import getHrefWithCategory from "@lib/utils/gerHrefWithCategory";
import navigator from "@lib/modules/navigator";
import { CategoryNavDiv } from "./styled";
import Button from "@/stories/common/Button";
import { useRouter } from "next/router";

const CategoryNav = () => {
  const { categories, status } = useCategories({ all: true });
  const { categoryName } = useActiveCategory();
  const router = useRouter();
  const isList = router.asPath.includes("list");
  const onClick = (category: CategoryItem) => () => {
    navigator({
      url: getHrefWithCategory(category),
      options: {
        shallow: true,
      },
    });
  };
  return (
    <CategoryNavDiv list={isList}>
      {status === "success"
        ? categories.map((category) => (
            <Button
              variant={
                categoryName === category.name ? "tertiary-active" : "tertiary"
              }
              key={category.id}
              onClick={onClick(category)}
              width={isList ? "110px" : "132px"}
              height={isList ? "44px" : "52px"}
            >
              {category.name}
            </Button>
          ))
        : null}
    </CategoryNavDiv>
  );
};

export default CategoryNav;
