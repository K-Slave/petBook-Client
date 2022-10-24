import useResource from "@lib/hooks/useResource";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import categoryState from "@atoms/pageAtoms/community/categoryState";
import { ARTICLE_LIST } from "@pages/community";
import localConsole from "@lib/utils/localConsole";
import { usePage } from "@lib/hooks/usePagination";
import PaginationButton from "./PaginationButton";
import ArticleList from "./ArticleList";

const ArticleListPagination = () => {
  const limit = useRef(10);
  const category = useRecoilValue(categoryState);
  const page = usePage();
  const articleListParams = {
    categoryId: category.id === 0 ? "" : category.id,
    page: page - 1,
    size: limit.current,
  };
  const { data } = useResource({
    key: `${ARTICLE_LIST.key}_${page}_${category.id}`,
    fetcher: ARTICLE_LIST.fetcher,
    params: articleListParams,
  });
  localConsole.log(
    `ArticleListSection render => currentPage: ${page}, category: ${category.name}`
  );
  return (
    <>
      <ArticleList posts={data === undefined ? [] : data?.data} />
      <PaginationButton numPages={10} />
    </>
  );
};

export default ArticleListPagination;
