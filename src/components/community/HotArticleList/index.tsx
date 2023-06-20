import { BookmarkBlankIcon } from "@components/common/icon/Bookmark";
import { HeartBlankIcon } from "@components/common/icon/Heart";
import { useResource } from "@lib/hooks/common/useResource";
import { List, Item } from "./styled";
import { ARTICLE_POPULAR_LIST } from "@lib/resources/articleResource";

const HotArticleList = () => {
  const payload = {
    params: {
      categoryId: "",
      page: 0,
      size: 5,
      popular: true,
    },
  };
  const { data } = useResource({
    resource: ARTICLE_POPULAR_LIST,
    payload,
  });
  return (
    <List>
      {data?.response.data.result.articles.map(({ id, title, stat }) => (
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
