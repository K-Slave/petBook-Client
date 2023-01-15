import { createArticleListResource } from "@pages/community/list/index";
import { useRef } from "react";
import { ArticleListResponse } from "@lib/API/petBookAPI/types/articleRequest";
import { UseQueryResult } from "@tanstack/react-query";
import useResource from "@lib/hooks/common/useResource";
import useCategory from "@lib/hooks/article/useActiveCategory";
import useSearchText from "@lib/hooks/article/useSearchText";
import { usePage } from "./usePagination";

export default function useArticleList(): {
  status: UseQueryResult["status"];
  articles: ArticleListResponse["articles"];
  totalPages: number;
} {
  // params
  const size = useRef(20);
  const page = usePage();
  const searchText = useSearchText();
  const { categoryName: name, categoryId: id } = useCategory();

  // fetch data
  const { data, status } = useResource(
    createArticleListResource({
      category: { id, name },
      page,
      searchText,
    })
  );

  // return data
  const articleList = {
    status,
    articles: data === undefined ? [] : data.data.articles,
    totalPages:
      data === undefined
        ? 0
        : Math.ceil(data.data.totalElements / size.current),
  };
  return articleList;
}
