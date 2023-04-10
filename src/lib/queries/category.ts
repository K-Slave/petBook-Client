import { categoryRequest } from "@lib/API/petBookAPI";
import type { Key } from "@lib/hooks/common/useResource";

const categoryKeys = {
  list: (): Key => ["CATEGORY_LIST"],
};

export const CATEGORY_LIST = {
  name: "CATEGORY_LIST" as const,
  createKey: categoryKeys.list,
  fetcher: categoryRequest.category_list,
};
