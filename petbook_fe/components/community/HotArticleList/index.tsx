import { BookmarkBlankIcon } from "@components/common/icon/BookmarkIcon";
import { HeartBlankIcon } from "@components/common/icon/HeartIcon";
import { List, Item } from "./styled";

const dummy = new Array(5).fill(1).map((_, index) => ({
  id: index + 1,
  title:
    "제목이 들어갑니다 제목이 들어갑니다제목이 들어갑니다제목이 들어갑니다 제목이 들어갑니다 제목이 들어갑니다제목이 들어갑니다제목이 들어갑니다",
}));

const HotArticleList = () => {
  return (
    <List>
      {dummy.map((data) => (
        <Item key={data.id}>
          <span className="HotArticle_title">{data.title}</span>
          <span className="HotArticle_stats">
            <span>
              <HeartBlankIcon />
              <span>000</span>
            </span>
            <span>
              <BookmarkBlankIcon />
              <span>000</span>
            </span>
          </span>
        </Item>
      ))}
    </List>
  );
};

export default HotArticleList;
