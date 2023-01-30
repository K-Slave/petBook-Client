import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequestSpr";

export default function getHrefWithCategory(category: CategoryItem) {
  return `/community/list?category=${category.name ? category.name : ""}_${
    category.id ? category.id : ""
  }`;
}
