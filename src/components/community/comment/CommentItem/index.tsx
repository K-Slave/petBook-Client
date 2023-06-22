import KebabMenu from "@/stories/common/KebabMenu";
import { BsArrowReturnRight } from "react-icons/bs";
import CommonInfo from "@components/community/CommonInfo";
import { BookmarkOutline } from "@/stories/Icon/Bookmark";
import { commentRequest } from "@lib/API/petBookAPI";
import { useRef, useState } from "react";
import useChangeComment from "@lib/hooks/comment/useChangeComment";
import useSubmitComment from "@lib/hooks/comment/useSubmitComment";
import { CommentItem } from "@lib/API/petBookAPI/types/commentRequest";
import { useQueryClient } from "@tanstack/react-query";
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
import useUserInfo from "@lib/hooks/common/useUserInfo";
import { COMMENT_LIST } from "@lib/resources/commentResource";
import Button from "@/stories/common/Button";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

export const NormalItem = ({
  comment,
  isChild,
  clickDeleteMenu,
}: ItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { userData } = useUserInfo();
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
          {userData?.id == user.id && !isEditing && (
            <KebabMenu menuList={menuList} />
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
  const { userData } = useUserInfo();
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
          {userData?.id == user.id && !isEditing && (
            <KebabMenu menuList={menuList} />
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
    await queryClient.invalidateQueries({
      queryKey: COMMENT_LIST.createKey(COMMENT_LIST.name, Number(articleId)),
    });
    clickCancelButton();
  });
  return (
    <Form onSubmit={onSubmit}>
      <CommentFormTextarea
        ref={textareaRef}
        defaultValue={content}
        onChange={onChange}
        autoFocus
      />
      <div>
        <Button variant="secondary" onClick={clickCancelButton}>
          취소
        </Button>
        <Button variant="primary" disabled={isLoading}>
          {isLoading ? "수정 중" : "완료"}
        </Button>
      </div>
    </Form>
  );
};

// --------------------------------------------------------------------

const ScrapButton = () => {
  return (
    <ScrapButtonBox type="button" isScrap="">
      <BookmarkOutline />
      <span>0</span>
    </ScrapButtonBox>
  );
};
