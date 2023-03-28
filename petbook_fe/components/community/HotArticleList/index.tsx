import { BookmarkBlankIcon } from "@components/common/icon/Bookmark";
import { HeartBlankIcon } from "@components/common/icon/Heart";
import { useResource } from "@lib/hooks/common/useResource";
import { POPULAR_ARTICLE_LIST } from "@lib/queries/article";
import { List, Item } from "./styled";

const HotArticleList = () => {
  const params = {
    categoryId: "",
    page: 0,
    size: 5,
    popular: true,
  };
  const { data } = useResource({
    key: POPULAR_ARTICLE_LIST.createKey({
      params,
    }),
    fetcher: () =>
      POPULAR_ARTICLE_LIST.fetcher({
        params,
      }),
  });
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
