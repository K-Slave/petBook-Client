import Link from "next/link";
import useArticleList from "@lib/hooks/article/useArticleList";
import { ArticleListResponse, ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import TagList from "../../TagList";
import {
  ArticleListDiv,
  ArticleItemImg,
  ArticleItemDiv,
  ArticleItemAvatar,
  Article,
} from "./styled/styledArticleList";

const ArticleList = () => {
  const articleList: ArticleListResponse = useArticleList();
  return (
    <ArticleListDiv>
      {articleList.map((article) => (
        <ArticleList.Item article={article} key={article.id} />
      ))}
    </ArticleListDiv>
  );
};

// ----------------------------------------------------------------------

interface ItemProps {
  article: ArticleResponse;
}

const Item = ({ article }: ItemProps) => {
  const { id, title, content, user, tags, stat } = article;
  const previewImage = "";
  const date = "2022-02-03";
  return (
    <Link href={`/community/${id}`} passHref>
      <Article>
        <div className="ArticleItem_Column">
          <div className="ArticleItem_UserInfo">
            <ArticleItemAvatar />
            <p className="ArticleItem_Nickname">{user.nickname}</p>
            <p className="ArticleItem_Date">{date}</p>
          </div>
          <ArticleItemDiv>
            <h3>{title}</h3>
            <p className="ArticleItem_Content">{content}</p>
            <TagList tags={tags} width={65} height={26} fontSize={14} />
            <p className="ArticleItem_Stats">
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
