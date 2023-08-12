import { CategoryListResponse } from "@lib/API/petBookAPI/types/categoryRequest";
import { CATEGORY_LIST } from "@lib/resources/commonResource";
import { useResource } from "../common/useResource";

export default function useCategories({ all }: { all: boolean }) {
  let categories: CategoryListResponse["result"] = [];
  const { data, status } = useResource({ resource: CATEGORY_LIST });

  if (status === "success" && all && data.response.data) {
    categories = [{ id: 0, name: "전체" }, ...data.response.data.result];
  }
  return { categories, status };
}
