import categoryState from "@atoms/pageAtoms/community/categoryState";
import { ARTICLE_LIST } from "@pages/community";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { ArticleListResponse } from "@lib/API/petBookAPI/types/articleRequest";
import { usePage } from "./usePagination";
import useResource from "../common/useResource";

export default function useArticleList(): Pick<ArticleListResponse, "articles"> & {
  totalPages: number
} {
    const size = useRef(10);
    const category = useRecoilValue(categoryState);
    const page = usePage();
    const { data } = useResource({
      key: `${ARTICLE_LIST.key}_${page}_${category.id}`,
      fetcher: ARTICLE_LIST.fetcher,
      params: {
        categoryId: category.id === 0 ? "" : category.id,
        page: page - 1,
        size: size.current,
      }
    });
    const articleList = data === undefined ? {
      articles: [],
      totalPages: 0
    } : {
      articles: data.data.articles,
      totalPages: Math.ceil(data.data.totalElements / size.current)
    };
    return articleList;
}
