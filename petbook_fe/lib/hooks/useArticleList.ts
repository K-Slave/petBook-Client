import categoryState from "@atoms/pageAtoms/community/categoryState";
import { ARTICLE_LIST } from "@pages/community";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { usePage } from "./usePagination";
import useResource from "./useResource";

export default function useArticleList() {
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
    const articleList = data === undefined ? [] : data?.data;
    return articleList;
}
