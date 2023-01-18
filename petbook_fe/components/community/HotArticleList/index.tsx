import { BookmarkBlankIcon } from "@components/common/icon/BookmarkIcon";
import { HeartBlankIcon } from "@components/common/icon/HeartIcon";
import useResource from "@lib/hooks/common/useResource";
import { HOT_ARTICLE_LIST } from "@pages/community";
import { List, Item } from "./styled";

const HotArticleList = () => {
  const { data } = useResource(HOT_ARTICLE_LIST);
  return (
    <List>
      {data?.data.articles.map(({ id, title, stat }) => (
        <Item key={id}>
          <span className="HotArticle_title">{title}</span>
          <span className="HotArticle_stats">
            <span>
              <HeartBlankIcon />
              <span>{stat.likeCount}</span>
            </span>
            <span>
              <BookmarkBlankIcon />
              <span>0</span>
            </span>
          </span>
        </Item>
      ))}
    </List>
  );
};

export default HotArticleList;
