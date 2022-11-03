import { useRef } from "react";
import { useRecoilValue } from "recoil";
import categoryState from "@atoms/pageAtoms/community/categoryState";
import { usePage } from "@lib/hooks/usePagination";
import useResource from "@lib/hooks/useResource";
import { ARTICLE_LIST } from "@pages/community";
import localConsole from "@lib/utils/localConsole";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import Link from "next/link";
import TagList from "../TagList";
import {
  ArticleListDiv,
  ArticleItemImg,
  ArticleItemDiv,
  ArticleItemAvatar,
  Article,
} from "./styled/styledArticleList";

const ArticleList = () => {
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
        <ArticleList.Item post={post} key={post.id} />
      ))}
    </ArticleListDiv>
  );
};

// ----------------------------------------------------------------------

interface ItemProps {
  post: ArticleResponse;
}

const Item = ({ post }: ItemProps) => {
  const { id, title, content, user, tags, stat } = post;
  const previewImage = "";
  const date = "2022-02-03";
  return (
    <Link href={`/community/${id}`} passHref>
      <Article>
        <div className="ArticleItem_column">
          <div className="ArticleItem_userInfo">
            <ArticleItemAvatar />
            <p className="ArticleItem_nickname">{user.nickname}</p>
            <p className="ArticleItem_date">{date}</p>
          </div>
          <ArticleItemDiv>
            <h3>{title}</h3>
            <p className="ArticleItem_content">{content}</p>
            <TagList tags={tags} width={65} height={26} fontSize={14} />
            <p className="ArticleItem_stats">
              <span>공감수 {stat.likeCount}</span>
              <span>/</span>
              <span>클릭수 {stat.viewCount}</span>
            </p>
          </ArticleItemDiv>
        </div>
        {previewImage === "" ? null : <ArticleItemImg />}
      </Article>
    </Link>
  );
};

ArticleList.Item = Item;

export default ArticleList;
