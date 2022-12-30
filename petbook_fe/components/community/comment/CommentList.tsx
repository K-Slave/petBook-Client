import useResource, { useSetResource } from "@lib/hooks/common/useResource";
import {
  COMMENT_CREATE_LIKE,
  COMMENT_DELETE,
  COMMENT_DELETE_LIKE,
  COMMENT_LIST,
} from "@pages/community/[articleId]";
import { useRouter } from "next/router";
import { CommentItem } from "@lib/API/petBookAPI/types/commentRequest";
import React, { Fragment, MouseEventHandler, useRef } from "react";
import { useQueryClient } from "react-query";
import debounce from "@lib/modules/debounce";
import { CommentListDiv } from "./styled/styledCommentList";

export interface onLikeParams {
  commentId: number;
  isLiked: boolean;
  initialLiked: boolean;
}

export interface ItemProps {
  comment: CommentItem;
  isChild: string;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  onLike: (params: onLikeParams) => void;
}

interface Props {
  Item: (props: ItemProps) => JSX.Element;
}

const CommentList = ({ Item }: Props) => {
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
    await queryClient.invalidateQueries(`${COMMENT_LIST.key}_${articleId}`);
  };
  const onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const commentId = e.currentTarget.dataset.commentid;
    if (commentId === undefined) {
      alert("댓글 삭제에 실패했습니다. 다시 시도해주세요 😢");
    } else {
      deleteComment(
        {
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

  const onLike = debounce(
    ({ commentId, isLiked, initialLiked }: onLikeParams) => {
      if (isLiked === initialLiked) return;
      if (!isLiked) {
        deleteLikeComment(
          {
            pathParam: `${commentId}`,
          },
          {
            onSuccess,
            onError: () => {
              alert("좋아요 취소에 실패했습니다. 다시 시도해주세요 😢");
            },
          }
        );
      } else {
        createLikeComment(
          {
            pathParam: `${commentId}`,
          },
          {
            onSuccess,
            onError: () => {
              alert("좋아요에 실패했습니다. 다시 시도해주세요 😢");
            },
          }
        );
      }
    },
    3000,
    timeoutId
  );
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

export default CommentList;
