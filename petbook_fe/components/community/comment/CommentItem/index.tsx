import DropdownMenu, { menuListStyle } from "@components/common/DropdownMenu";
import { BsArrowReturnRight } from "react-icons/bs";
import styled from "styled-components";
import CommonInfo from "@components/community/CommonInfo";
import { BookmarkBlankIcon } from "@components/common/icon/BookmarkIcon";
import useUserId from "@lib/hooks/article/useUserId";
import { commentRequest } from "@lib/API/petBookAPI";
import { useRef, useState } from "react";
import useChangeComment from "@lib/hooks/comment/useChangeComment";
import useSubmitComment from "@lib/hooks/comment/useSubmitComment";
import { ItemProps } from "../CommentList";
import {
  NormalItemDiv,
  QnaItemBubble,
  QnaItemDiv,
  ScrapButtonBox,
} from "./styled";
import LikeButton from "../../LikeButton";
import { CommentFormButton, CommentFormTextarea } from "../CommentForm/styled";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

export const NormalItem = ({
  comment,
  isChild,
  clickDeleteMenu,
}: ItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
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
          {userId === user.id && (
            <DropdownMenu
              MenuList={
                <MenuList
                  clickDeleteMenu={clickDeleteMenu}
                  clickEditMenu={() => setIsEditing(true)}
                />
              }
            />
          )}
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

export const QnaItem = ({ comment, isChild, clickDeleteMenu }: ItemProps) => {
  const { user, createdAt, content, likeCount, id, articleId, isLiked } =
    comment;
  const userId = useUserId();
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { onChange } = useChangeComment({
    content,
    parentId: null,
    commentId: id,
  });

  const { onSubmit } = useSubmitComment(textareaRef);

  return (
    <QnaItemDiv>
      <CommonInfo
        username={user.nickname}
        date={createdAt}
        avatar={avatar}
        year={1}
      />
      <QnaItemBubble isEditing={isEditing ? "true" : ""}>
        <div className="Item_Row">
          {isEditing ? (
            <form>
              <CommentFormTextarea
                ref={textareaRef}
                defaultValue={content}
                onChange={onChange}
                autoFocus
              />
              <button
                className="Secondary"
                type="button"
                onClick={() => setIsEditing(false)}
              >
                취소
              </button>
              <CommentFormButton
                className="Primary"
                type="submit"
                onClick={onSubmit}
              >
                수정 완료
              </CommentFormButton>
            </form>
          ) : (
            <p className="Item_Content">{content}</p>
          )}

          {userId === user.id && !isEditing && (
            <DropdownMenu
              MenuList={
                <MenuList
                  clickDeleteMenu={clickDeleteMenu}
                  clickEditMenu={() => setIsEditing(true)}
                />
              }
            />
          )}
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

interface MenuListProps extends Pick<ItemProps, "clickDeleteMenu"> {
  clickEditMenu: () => void;
}

const MenuList = ({ clickDeleteMenu, clickEditMenu }: MenuListProps) => {
  return (
    <MenuListBox>
      <button type="button" onClick={clickEditMenu}>
        수정
      </button>
      <button type="button" onClick={clickDeleteMenu}>
        삭제
      </button>
    </MenuListBox>
  );
};

const MenuListBox = styled.div`
  ${menuListStyle};
  button {
    width: 100%;
    text-align: left;
  }
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
