import DOMPurify from "isomorphic-dompurify";
import CommonInfo from "@components/community/CommonInfo";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import DropdownMenu from "@components/common/DropdownMenu";
import {
  ARTICLE_CREATE_LIKE,
  ARTICLE_DELETE_LIKE,
} from "@pages/community/list/[articleId]";
import TagList from "../TagList";
import {
  ArticleSectionBox,
  Spacer,
  MenuListBox,
} from "./styled/styledArticleSection";
import { BookmarkBlankIcon } from "../BookmarkIcon";
import ImageSlider from "./ImageSlider";
import LikeButton from "../LikeButton";

const dummyImage =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const ArticleSection = ({ data }: { data: ArticleResponse | undefined }) => {
  if (data === undefined) {
    return <ArticleSectionBox />;
  }
  const {
    id,
    title,
    content,
    user,
    category,
    tags,
    stat,
    createdAt,
    images,
    isLike,
  } = data;

  return (
    <ArticleSectionBox>
      <div className="ArticleSection_Top_Row">
        <h2>{title}</h2>
        <DropdownMenu MenuList={<MenuList />} />
      </div>
      <CommonInfo
        avatar={dummyImage}
        username={user.nickname}
        date={createdAt}
        year={1}
      />
      {category.name === "질문과 답변" ? (
        <Spacer />
      ) : content ? (
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          className="ArticleSection_Content"
        />
      ) : (
        <Spacer />
      )}
      {images.length !== 0 && <ImageSlider images={images} />}
      <TagList tags={tags} />
      <div className="ArticleSection_Button_Box">
        <LikeButton
          id={id}
          liked={isLike}
          likeCount={stat.likeCount}
          CREATE_LIKE_RESOURCE={ARTICLE_CREATE_LIKE}
          DELETE_LIKE_RESOURCE={ARTICLE_DELETE_LIKE}
        />
        <div>
          <button type="button">
            <BookmarkBlankIcon />
          </button>
          <span className="scrapCount">0</span>
        </div>
      </div>
    </ArticleSectionBox>
  );
};

// ---------------------------------------

const MenuList = () => {
  return (
    <MenuListBox>
      <button type="button">수정</button>
      <button type="button">삭제</button>
    </MenuListBox>
  );
};

// ----------------------------------------

export default ArticleSection;
