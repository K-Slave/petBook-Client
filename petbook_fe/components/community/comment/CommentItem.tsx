import DropdownMenu, { menuListStyle } from "@components/common/DropdownMenu";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import styled from "styled-components";
import CommonInfo from "../CommonInfo";
import LikeButton from "../styled/LikeButton.styled";
import ScrapButton from "../styled/ScrapButton.styled";
import { ItemProps } from "./CommentList";
import {
  NormalItemDiv,
  QnaItemBubble,
  QnaItemDiv,
} from "./styled/styledCommentItem";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

export const NormalItem = ({
  comment,
  isChild,
  onDelete,
  onLike,
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
  const [isLiked, setIsLiked] = useState(initialLiked);
  const clickLikeButton = () => {
    onLike({ commentId: id, isLiked: !isLiked, initialLiked });
    setIsLiked((state) => !state);
  };
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
          <div>
            <LikeButton
              type="button"
              onClick={clickLikeButton}
              isLiked={isLiked ? "true" : ""}
            />
            <span className="Item_likeCount">
              {likeCount +
                (!initialLiked && isLiked
                  ? 1
                  : initialLiked && !isLiked
                  ? -1
                  : 0)}
            </span>
          </div>
          <div>
            <ScrapButton type="button" />
            <span>0</span>
          </div>
        </div>
      </div>
    </NormalItemDiv>
  );
};

export const QnaItem = ({ comment, isChild, onDelete, onLike }: ItemProps) => {
  const {
    user,
    createdAt,
    content,
    likeCount,
    id,
    articleId,
    isLiked: initialLiked,
  } = comment;
  const [isLiked, setIsLiked] = useState(initialLiked);
  const clickLikeButton = () => {
    onLike({ commentId: id, isLiked: !isLiked, initialLiked });
    setIsLiked((state) => !state);
  };
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
          <div>
            <LikeButton
              type="button"
              onClick={clickLikeButton}
              isLiked={isLiked ? "true" : ""}
            />
            <span className="Item_likeCount">
              {likeCount +
                (isLiked && !initialLiked
                  ? 1
                  : !isLiked && initialLiked
                  ? -1
                  : 0)}
            </span>
          </div>
          <div>
            <ScrapButton type="button" />
            <span>0</span>
          </div>
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
