import DropdownMenu, { menuListStyle } from "@components/common/DropdownMenu";
import useLikeDebounce from "@lib/hooks/comment/useLikeDebounce";
import { BsArrowReturnRight } from "react-icons/bs";
import styled from "styled-components";
import { CommentItem } from "@lib/API/petBookAPI/types/commentRequest";
import CommonInfo from "../CommonInfo";
import { BookmarkBlankIcon, BookmarkFilledIcon } from "../BookmarkIcon";
import { HeartBlankIcon, HeartFilledIcon } from "../HeartIcon";
import { ItemProps } from "./CommentList";
import {
  LikeButtonBox,
  NormalItemDiv,
  QnaItemBubble,
  QnaItemDiv,
  ScrapButtonBox,
} from "./styled/styledCommentItem";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

export const NormalItem = ({
  comment,
  isChild,
  onDelete,
}: ItemProps) => {
  const {
    user,
    createdAt,
    content,
    likeCount,
    id,
    articleId,
    isLiked,
  } = comment;
  return (
    <NormalItemDiv isChild={isChild}>
      {isChild && <BsArrowReturnRight />}
      <div>
        <div className="Item_Row">
          <CommonInfo
            username={user.nickname}
            date={createdAt}
            avatar={avatar}
            year={1}
          />
          <DropdownMenu
            MenuList={<MenuList onDelete={onDelete} commentId={id} />}
          />
        </div>
        <p className="Item_Content">{content}</p>
        <div className="Item_Button_Box">
          <LikeButton
            id={id}
            liked={isLiked}
            likeCount={likeCount}
          />
          <ScrapButton />
        </div>
      </div>
    </NormalItemDiv>
  );
};

export const QnaItem = ({
  comment,
  isChild,
  onDelete,
}: ItemProps) => {
  const {
    user,
    createdAt,
    content,
    likeCount,
    id,
    articleId,
    isLiked,
  } = comment;
  return (
    <QnaItemDiv>
      <CommonInfo
        username={user.nickname}
        date={createdAt}
        avatar={avatar}
        year={1}
      />
      <QnaItemBubble>
        <div className="Item_Row">
          <p className="Item_Content">{content}</p>
          <DropdownMenu
            MenuList={<MenuList onDelete={onDelete} commentId={comment.id} />}
          />
        </div>
        <div className="Item_Button_Box">
          <LikeButton
            id={id}
            liked={isLiked}
            likeCount={likeCount}
          />
          <ScrapButton />
        </div>
      </QnaItemBubble>
    </QnaItemDiv>
  );
};

// -------------------------------------------------------

interface MenuListProps extends Pick<ItemProps, "onDelete"> {
  commentId: number;
}

const MenuList = ({ onDelete, commentId }: MenuListProps) => {
  return (
    <MenuListBox>
      <button type="button">수정</button>
      <button type="button" onClick={onDelete} data-commentid={commentId}>
        삭제
      </button>
    </MenuListBox>
  );
};

const MenuListBox = styled.div`
  ${menuListStyle};
`;

// --------------------------------------------------------------------

type LikeButtonProps = Pick<CommentItem, "id" | "likeCount"> & {
  liked: boolean;
};

const LikeButton = ({ id, liked, likeCount } : LikeButtonProps) => {
  const { isLiked, clickLikeButton } = useLikeDebounce({
    id,
    liked,
  });
  return (
    <LikeButtonBox
      type="button"
      onClick={clickLikeButton}
      isLiked={isLiked ? "true" : ""}
    >
      {isLiked ? <HeartFilledIcon /> : <HeartBlankIcon />}
      <span className={`likeCount ${isLiked ? "active" : ""}`}>
      {likeCount +
        (!liked && isLiked
          ? 1
          : liked && !isLiked
          ? -1
          : 0)}
      </span>
    </LikeButtonBox>
  );
};

const ScrapButton = () => {
  return (
    <ScrapButtonBox type="button" isScrap="">
      <BookmarkBlankIcon />
      <span>0</span>
    </ScrapButtonBox>
  );
};
