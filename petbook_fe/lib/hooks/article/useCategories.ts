import { CategoryListResponse } from "@lib/API/petBookAPI/types/categoryRequest";
import { CATEGORY_LIST } from "@lib/queries/category";
import { useResource } from "../common/useResource";

export default function useCategories({ all }: { all: boolean }) {
  let categories: CategoryListResponse = [];
  const { data, status } = useResource({
    key: CATEGORY_LIST.createKey(),
    fetcher: () => CATEGORY_LIST.fetcher(),
  });
  if (status === "success" && all) {
    categories = [{ id: 0, name: "전체" }, ...data.data];
  }
  return { categories, status };
}
