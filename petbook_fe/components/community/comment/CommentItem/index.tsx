import DropdownMenu from "@components/common/DropdownMenu";
import { BsArrowReturnRight } from "react-icons/bs";
import CommonInfo from "@components/community/CommonInfo";
import { BookmarkBlankIcon } from "@components/common/icon/Bookmark";
import useUserId from "@lib/hooks/article/useUserId";
import { commentRequest } from "@lib/API/petBookAPI";
import { useRef, useState } from "react";
import useChangeComment from "@lib/hooks/comment/useChangeComment";
import useSubmitComment from "@lib/hooks/comment/useSubmitComment";
import { CommentItem } from "@lib/API/petBookAPI/types/commentRequest";
import { useQueryClient } from "@tanstack/react-query";
import { invalidateCommentList } from "@pages/community/list/[articleId]";
import { ItemProps } from "../CommentList";
import {
  Form,
  NormalItemDiv,
  QnaItemBubble,
  QnaItemDiv,
  ScrapButtonBox,
} from "./styled";
import LikeButton from "../../LikeButton";
import { CommentFormTextarea } from "../CommentForm/styled";

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
  const menuList = [
    {
      name: "수정",
      onClick: () => setIsEditing(true),
    },
    {
      name: "삭제",
      onClick: clickDeleteMenu,
    },
  ];
  return (
    <NormalItemDiv isEditing={isEditing ? "true" : ""}>
      {isChild && <BsArrowReturnRight />}
      <div>
        <div className="Item_Row">
          <CommonInfo
            username={user.nickname}
            date={createdAt}
            avatar={avatar}
            year={1}
          />
          {userId === user.id && !isEditing && (
            <DropdownMenu menuList={menuList} />
          )}
        </div>
        {isEditing ? (
          <EditForm
            articleId={articleId}
            content={content}
            id={id}
            clickCancelButton={() => setIsEditing(false)}
          />
        ) : (
          <>
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
          </>
        )}
      </div>
    </NormalItemDiv>
  );
};

export const QnaItem = ({ comment, isChild, clickDeleteMenu }: ItemProps) => {
  const { user, createdAt, content, likeCount, id, articleId, isLiked } =
    comment;
  const userId = useUserId();
  const [isEditing, setIsEditing] = useState(false);
  const menuList = [
    {
      name: "수정",
      onClick: () => setIsEditing(true),
    },
    {
      name: "삭제",
      onClick: clickDeleteMenu,
    },
  ];
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
            <EditForm
              articleId={articleId}
              content={content}
              id={id}
              clickCancelButton={() => setIsEditing(false)}
            />
          ) : (
            <p className="Item_Content">{content}</p>
          )}
          {userId === user.id && !isEditing && (
            <DropdownMenu menuList={menuList} />
          )}
        </div>
        {!isEditing && (
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
        )}
      </QnaItemBubble>
    </QnaItemDiv>
  );
};

// -------------------------------------

interface Props extends Pick<CommentItem, "content" | "id" | "articleId"> {
  clickCancelButton: () => void;
}

const EditForm = ({ content, id, articleId, clickCancelButton }: Props) => {
  const queryClient = useQueryClient();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { onChange } = useChangeComment({
    content,
    parentId: null,
    commentId: id,
  });

  const { onSubmit, isLoading } = useSubmitComment(async () => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.value = "";
    }
    await invalidateCommentList(queryClient, String(articleId));
    clickCancelButton();
  });
  return (
    <Form>
      <CommentFormTextarea
        ref={textareaRef}
        defaultValue={content}
        onChange={onChange}
        autoFocus
      />
      <div>
        <button className="Secondary" type="button" onClick={clickCancelButton}>
          취소
        </button>
        <button
          className="Primary"
          type="submit"
          onClick={onSubmit}
          disabled={isLoading}
        >
          수정 완료
        </button>
      </div>
    </Form>
  );
};

// --------------------------------------------------------------------

const ScrapButton = () => {
  return (
    <ScrapButtonBox type="button" isScrap="">
      <BookmarkBlankIcon />
      <span>0</span>
    </ScrapButtonBox>
  );
};
