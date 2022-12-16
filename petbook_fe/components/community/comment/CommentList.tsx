import { BsArrowReturnRight } from "react-icons/bs";
import useResource, { useSetResource } from "@lib/hooks/common/useResource";
import { COMMENT_CREATE_LIKE, COMMENT_DELETE, COMMENT_DELETE_LIKE, COMMENT_LIST } from "@pages/community/[articleId]";
import { useRouter } from "next/router";
import { CommentItem } from "@lib/API/petBookAPI/types/commentRequest";
import React, { Fragment, MouseEventHandler, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import styled from "styled-components";
import DropdownMenu, { menuListStyle } from "@components/common/DropdownMenu";
import debounce from "@lib/modules/debounce";
import CommonInfo from "../CommonInfo";
import { CommentListDiv, NormalItemDiv, LikeButton, ScrapButton, QnaItemDiv, QnaItemBubble } from "./styled/styledCommentList";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

interface Props {
  Item: (props: ItemProps) => JSX.Element;
}

interface onLikeParams {
  commentId: number;
  isLiked: boolean;
  initialLiked: boolean;
}

const CommentList = ({ Item } : Props) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const articleId = router.query.articleId as string;
  const { data } = useResource({
    key: `${COMMENT_LIST.key}_${articleId}`,
    fetcher: () =>
      COMMENT_LIST.fetcher({
        articleId,
      }),
  });
  const { mutate: deleteComment } = useSetResource(COMMENT_DELETE);
  const { mutate: createLikeComment } = useSetResource(COMMENT_CREATE_LIKE);
  const { mutate: deleteLikeComment } = useSetResource(COMMENT_DELETE_LIKE);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onSuccess = async () => {
    await queryClient.invalidateQueries(
      `${COMMENT_LIST.key}_${articleId}`
    );
  };
  const onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const commentId = e.currentTarget.dataset.commentid;
    if (commentId === undefined) {
      alert("댓글 삭제에 실패했습니다. 다시 시도해주세요 😢");
    } else {
      deleteComment({
          pathParam: `/${commentId}`,
        },
        {
          onSuccess,
          onError: () => {
            alert("댓글 삭제에 실패했습니다. 다시 시도해주세요 😢");
          },
        }
      );
    }
  };

  const onLike = debounce(({ commentId, isLiked, initialLiked } : onLikeParams) => {
    if (isLiked === initialLiked) return;
    if (!isLiked) {
      deleteLikeComment({
        pathParam: `${commentId}`
      }, {
        onSuccess,
        onError: () => {
          alert("좋아요 취소에 실패했습니다. 다시 시도해주세요 😢");
        }
      });
    } else {
      createLikeComment({
        pathParam: `${commentId}`
      }, {
        onSuccess,
        onError: () => {
          alert("좋아요에 실패했습니다. 다시 시도해주세요 😢");
        }
      });
    }
  }, 3000, timeoutId);
  return (
    <CommentListDiv>
      {data?.data.map((comment) => (
        <Fragment key={comment.parent.id}>
          <Item
            comment={comment.parent}
            isChild=""
            onDelete={onDelete}
            onLike={onLike}
            key={comment.parent.id}
          />
          {comment.children.map((child) => (
            <Item
              comment={child}
              isChild="true"
              onDelete={onDelete}
              onLike={onLike}
              key={child.id}
            />
          ))}
        </Fragment>
      ))}
    </CommentListDiv>
  );
};

// ----------------------------------------------------

interface ItemProps {
  comment: CommentItem;
  isChild: string;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  onLike: (params: onLikeParams) => void;
}

export const NormalItem = ({ comment, isChild, onDelete, onLike }: ItemProps) => {
  const { user, createdAt, content, likeCount, id, articleId, isLiked: initialLiked } = comment;
  const [isLiked, setIsLiked] = useState(initialLiked);
  const clickLikeButton = () => {
    onLike({ commentId: id, isLiked, initialLiked });
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
          <DropdownMenu MenuList={<MenuList onDelete={onDelete} commentId={id} />} />
        </div>
        <p className="Item_Content">{content}</p>
        <div className="Item_Button_Box">
          <div>
            <LikeButton type="button" onClick={clickLikeButton} />
            <span>{likeCount + ((!initialLiked && isLiked) ? 1 : (initialLiked && !isLiked) ? -1 : 0)}</span>
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

export const QnaItem = ({ comment, isChild, onDelete, onLike } : ItemProps) => {
  const { user, createdAt, content, likeCount, id, articleId, isLiked: initialLiked } = comment;
  const [isLiked, setIsLiked] = useState(initialLiked);
  const clickLikeButton = () => {
    onLike({ commentId: id, isLiked, initialLiked });
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
          <DropdownMenu MenuList={<MenuList onDelete={onDelete} commentId={comment.id} />} />
        </div>
        <div className="Item_Button_Box">
          <div>
          <LikeButton type="button" onClick={clickLikeButton} />
            <span>{likeCount + ((isLiked && !initialLiked) ? 1 : (!isLiked && initialLiked) ? -1 : 0)}</span>
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

// -------------------------------------------------

interface MenuListProps extends Pick<ItemProps, "onDelete"> {
  commentId: number;
}

const MenuList = ({ onDelete, commentId } : MenuListProps) => {
  return (
    <MenuListBox>
      <button type="button">수정</button>
      <button type="button" onClick={onDelete} data-commentid={commentId}>삭제</button>
    </MenuListBox>
  );
};

const MenuListBox = styled.div`
  ${menuListStyle};
`;

export default CommentList;
