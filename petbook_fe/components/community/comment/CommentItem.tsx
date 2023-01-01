import DropdownMenu, { menuListStyle } from "@components/common/DropdownMenu";
import useLike, { useLikeParams } from "@lib/hooks/comment/useLike";
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
  updateIsLiked,
}: ItemProps) => {
  const {
    user,
    createdAt,
    content,
    likeCount,
    id,
    articleId,
    isLiked: initialLiked,
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
            initialLiked={initialLiked}
            updateIsLiked={updateIsLiked}
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
  updateIsLiked,
}: ItemProps) => {
  const {
    user,
    createdAt,
    content,
    likeCount,
    id,
    articleId,
    isLiked: initialLiked,
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
            initialLiked={initialLiked}
            updateIsLiked={updateIsLiked}
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

type LikeButtonProps = useLikeParams & Pick<CommentItem, "likeCount">;

const LikeButton = ({ id, initialLiked, updateIsLiked, likeCount } : LikeButtonProps) => {
  const { isLiked, clickLikeButton } = useLike({
    id,
    initialLiked,
    updateIsLiked,
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
        (!initialLiked && isLiked
          ? 1
          : initialLiked && !isLiked
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
