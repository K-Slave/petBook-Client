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
  const onClick = (category: CategoryItem) => () => {
    navigator({
      url: getHrefWithCategory(category),
      options: {
        shallow: true,
      },
    });
  };
  return (
    <CategoryNavDiv list={router.asPath.includes("list")}>
      {status === "success"
        ? categories.map((category) => (
            <Button
              variant="tertiary"
              key={category.id}
              onClick={onClick(category)}
              active={categoryName === category.name ? true : false}
              width={router.asPath.includes("list") ? "110px" : "132px"}
              height={router.asPath.includes("list") ? "44px" : "52px"}
            >
              {category.name}
            </Button>
          ))
        : null}
    </CategoryNavDiv>
  );
};

export default CategoryNav;
