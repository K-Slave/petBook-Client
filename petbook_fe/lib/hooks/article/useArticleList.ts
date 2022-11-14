import categoryState from "@atoms/pageAtoms/community/categoryState";
import { ARTICLE_LIST } from "@pages/community";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { ArticleItem } from "@lib/API/petBookAPI/types/articleRequest";
import { usePage } from "./usePagination";
import useResource from "../common/useResource";

export default function useArticleList(): {
  status: "idle" | "error" | "loading" | "success";
  articles: ArticleItem[];
  totalPages: number;
} {
    const size = useRef(10);
    const category = useRecoilValue(categoryState);
    const page = usePage();
    const { data, status } = useResource({
      key: `${ARTICLE_LIST.key}_${page}_${category.id}`,
      fetcher: ARTICLE_LIST.fetcher,
      params: {
        categoryId: category.id === 0 ? "" : category.id,
        page: page - 1,
        size: size.current,
      }
    });
    const articleList = {
      status,
      articles: data === undefined ? [] : data.data.articles,
      totalPages: data === undefined ? 0 : Math.ceil(data.data.totalElements / size.current)
    };
    return articleList;
}
