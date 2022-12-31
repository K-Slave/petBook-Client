import { ARTICLE_LIST } from "@pages/community/list";
import { useRef } from "react";
import { ArticleListResponse } from "@lib/API/petBookAPI/types/articleRequest";
import { UseQueryResult } from "react-query";
import { usePage } from "./usePagination";
import useResource from "../common/useResource";
import useCategory from "./useCategory";

export default function useArticleList(): {
  status: UseQueryResult["status"];
  articles: ArticleListResponse["articles"];
  totalPages: number;
} {
  // params
  const size = useRef(10);
  const page = usePage();
  const { categoryName, categoryId } = useCategory();

  // fetch data
  const { data, status } = useResource({
    key: `${ARTICLE_LIST.key}_${categoryName}_${page}`,
    fetcher: ARTICLE_LIST.fetcher,
    params: {
      categoryId: categoryId === 0 ? "" : categoryId,
      page: page - 1,
      size: size.current,
    }
  });

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
