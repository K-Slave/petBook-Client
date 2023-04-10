import { useRef } from "react";
import { ArticleListResponse } from "@lib/API/petBookAPI/types/articleRequest";
import { UseQueryResult } from "@tanstack/react-query";
import { useResource } from "@lib/hooks/common/useResource";
import useCategory from "@lib/hooks/article/useActiveCategory";
import useSearchText from "@lib/hooks/common/useSearchText";
import { usePage } from "../../common/Pagination/usePagination";
import { ARTICLE_LIST, ARTICLE_SEARCH } from "@lib/queries/article";

export default function useArticleList(): {
  status: UseQueryResult["status"];
  articles: ArticleListResponse["articles"];
  totalPages: number;
  params: {
    searchText: string;
    categoryName: string;
  };
} {
  // params
  const size = useRef(20);
  const page = usePage() - 1;
  const searchText = useSearchText();
  const { categoryName: name, categoryId: id } = useCategory();

  // fetch data
  const { data, status } = useResource(
    searchText
      ? {
          key: ARTICLE_SEARCH.createKey({
            params: {
              categoryId: id === 0 ? null : id,
              page,
              size: size.current,
              searchText,
            },
          }),
          fetcher: () =>
            ARTICLE_SEARCH.fetcher({
              params: {
                categoryId: id === 0 ? null : id,
                page,
                size: size.current,
                searchText,
              },
            }),
        }
      : {
          key: ARTICLE_LIST.createKey({
            params: {
              categoryId: id === 0 ? "" : id.toString(),
              page,
              size: size.current,
              popular: false,
            },
          }),
          fetcher: () =>
            ARTICLE_LIST.fetcher({
              params: {
                categoryId: id === 0 ? "" : id.toString(),
                page,
                size: size.current,
                popular: false,
              },
            }),
        }
  );

  // return data
  const articleList = {
    status,
    articles: data === undefined ? [] : data.data.articles,
    totalPages:
      data === undefined
        ? 0
        : searchText
        ? Math.ceil(data.data.articles.length / size.current)
        : Math.ceil(data.data.totalElements / size.current),
    params: {
      searchText,
      categoryName: name,
    },
  };
  return articleList;
}
