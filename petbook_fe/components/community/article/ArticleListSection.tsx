import { ARTICLE_LIST } from "@pages/community";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import categoryState from "@atoms/pageAtoms/community/categoryState";
import { useQuery } from "react-query";
import MainSection from "../MainSection";
import PaginationButton from "./PaginationButton";
import ArticleFilter from "./ArticleFilter";
import ArticleList from "./ArticleList";
import { usePage } from "./usePagination";
import useScroll from "./useScroll";

const ArticleListSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const limit = useRef(10);
  const category = useRecoilValue(categoryState);
  const page = usePage();
  const articleListParams = {
    categoryId: category.id === 0 ? "" : category.id,
    page: page - 1,
    size: limit.current,
  };
  const { data, status } = useQuery(
    `${ARTICLE_LIST.key}_${page}_${category.id}`,
    () => ARTICLE_LIST.fetcher(articleListParams),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );
  console.log("board", data);
  console.log(page, "currentPage, PostSection render");

  useScroll({ top: ref.current?.offsetTop }, [page]);
  return (
    <MainSection
      title="Live talk"
      description="실시간 업로드되는 유저들의 이야기"
      sectionRef={ref}
    >
      <ArticleFilter />
      <ArticleList posts={data === undefined ? [] : data?.data} />
      <PaginationButton numPages={10} />
    </MainSection>
  );
};

export default ArticleListSection;
