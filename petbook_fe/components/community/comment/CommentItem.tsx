import DropdownMenu, { menuListStyle } from "@components/common/DropdownMenu";
import { BsArrowReturnRight } from "react-icons/bs";
import styled from "styled-components";
import CommonInfo from "@components/community/CommonInfo";
import {
  BookmarkBlankIcon,
  BookmarkFilledIcon,
} from "@components/common/icon/BookmarkIcon";
import useUserId from "@lib/hooks/article/useUserId";
import { commentRequest } from "@lib/API/petBookAPI";
import { ItemProps } from "./CommentList";
import {
  NormalItemDiv,
  QnaItemBubble,
  QnaItemDiv,
  ScrapButtonBox,
} from "./styled/styledCommentItem";
import LikeButton from "../LikeButton";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

export const NormalItem = ({ comment, isChild, onDelete }: ItemProps) => {
  const userId = useUserId();
  const { user, createdAt, content, likeCount, id, articleId, isLiked } =
    comment;
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
          {userId === user.id && <DropdownMenu
            MenuList={<MenuList onDelete={onDelete} commentId={id} />}
          />}
        </div>
        <p className="Item_Content">{content}</p>
        <div className="Item_Button_Box">
          <LikeButton
            id={id}
            liked={isLiked}
            likeCount={likeCount}
            createLike={commentRequest.comment_create_like}
            deleteLike={commentRequest.comment_delete_like}
          />
          <ScrapButton />
        </div>
      </div>
    </NormalItemDiv>
  );
};

export const QnaItem = ({ comment, isChild, onDelete }: ItemProps) => {
  const userId = useUserId();
  const { user, createdAt, content, likeCount, id, articleId, isLiked } =
    comment;
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
          {userId === user.id && <DropdownMenu
            MenuList={<MenuList onDelete={onDelete} commentId={comment.id} />}
          />}
        </div>
        <div className="Item_Button_Box">
          <LikeButton
            id={id}
            liked={isLiked}
            likeCount={likeCount}
            createLike={commentRequest.comment_create_like}
            deleteLike={commentRequest.comment_delete_like}
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

const ScrapButton = () => {
  return (
    <ScrapButtonBox type="button" isScrap="">
      <BookmarkBlankIcon />
      <span>0</span>
    </ScrapButtonBox>
  );
};
