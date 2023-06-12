import { useRef } from "react";
import { ArticleListResponse } from "@lib/API/petBookAPI/types/articleRequest";
import { UseQueryResult } from "@tanstack/react-query";
import { useResource } from "@lib/hooks/common/useResource";
import useCategory from "@lib/hooks/article/useActiveCategory";
import useSearchText from "@lib/hooks/common/useSearchText";
import { usePage } from "@lib/hooks/common/usePagination";
import { ARTICLE_LIST, ARTICLE_SEARCH } from "@lib/resources/articleResource";

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

  const searchPayload = {
    params: {
      categoryId: id === 0 ? null : id,
      page,
      size: size.current,
      searchText,
    },
  };

  const defaultPayload = {
    params: {
      categoryId: id === 0 ? "" : id.toString(),
      page,
      size: size.current,
      popular: false,
    },
  };

  searchText
    ? {
        resource: ARTICLE_SEARCH,
        payload: searchPayload,
      }
    : {
        resource: ARTICLE_LIST,
        payload: defaultPayload,
      };

  // fetch data
  // TODO: 2개의 리소스를 받을수 있게 처리해야함
  const { data, status } = useResource<any, ArticleListResponse>({
    resource: searchText ? ARTICLE_SEARCH : ARTICLE_LIST,
    payload: searchText ? searchPayload : defaultPayload,
  });

  // return data
  const articleList = {
    status,
    articles: data === undefined ? [] : data.response.data.articles,
    totalPages:
      data === undefined
        ? 0
        : searchText
        ? Math.ceil(data.response.data.articles.length / size.current)
        : Math.ceil(data.response.data.totalElements / size.current),
    params: {
      searchText,
      categoryName: name,
    },
  };
  return articleList;
}
