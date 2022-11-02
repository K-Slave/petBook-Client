import styled from "styled-components";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import categoryState from "@atoms/pageAtoms/community/categoryState";
import { usePage } from "@lib/hooks/usePagination";
import useResource from "@lib/hooks/useResource";
import { ARTICLE_LIST } from "@pages/community";
import localConsole from "@lib/utils/localConsole";
import { ItemProps } from "./ArticleItem";

interface Props {
  Item: (props: ItemProps) => JSX.Element;
}

const ArticleList = ({ Item }: Props) => {
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
  const posts = data === undefined ? [] : data?.data;
  localConsole.log(
    `ArticleList render => currentPage: ${page}, category: ${category.name}`
  );
  return (
    <ArticleListDiv>
      {posts.map((post) => (
        <Item post={post} key={post.id} />
      ))}
    </ArticleListDiv>
  );
};

const ArticleListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default ArticleList;
