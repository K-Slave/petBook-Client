import { CategoryListResponse } from "@lib/API/petBookAPI/types/categoryRequest";
import { useResource } from "../common/useResource";
import { CATEGORY_LIST } from "@lib/resources/commonResource";
import localConsole from "@lib/utils/localConsole";

export default function useCategories({ all }: { all: boolean }) {
  let categories: CategoryListResponse = [];
  const { data, status } = useResource({ resource: CATEGORY_LIST });

  if (status === "success" && all) {
    categories = [{ id: 0, name: "전체" }, ...data.response.data];
  }
  return { categories, status };
}