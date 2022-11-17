import { CategoryListResponse } from "@lib/API/petBookAPI/types/categoryRequestSpr";
import { CATEGORY_LIST } from "@pages/community";
import useResource from "../common/useResource";

export default function useCategories({ all }: { all: boolean }) {
  let categories: CategoryListResponse = [];
  const { data, status } = useResource(CATEGORY_LIST);
  if (status === "success" && all) {
    categories = [{ id: 0, name: "전체" }, ...data.data];
  }
  return { categories, status };
}
