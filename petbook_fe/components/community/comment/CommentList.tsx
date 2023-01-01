import useResource, { useSetResource } from "@lib/hooks/common/useResource";
import {
  COMMENT_CREATE_LIKE,
  COMMENT_DELETE,
  COMMENT_DELETE_LIKE,
  COMMENT_LIST,
} from "@pages/community/list/[articleId]";
import { useRouter } from "next/router";
import { CommentItem } from "@lib/API/petBookAPI/types/commentRequest";
import React, { Fragment, MouseEventHandler, useRef } from "react";
import { useQueryClient } from "react-query";
import debounce from "@lib/modules/debounce";
import { updateIsLikedParams } from "@lib/hooks/comment/useLike";
import { CommentListDiv } from "./styled/styledCommentList";

export interface ItemProps {
  comment: CommentItem;
  isChild: string;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  updateIsLiked: (params: updateIsLikedParams) => void;
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

  const updateIsLiked = debounce(
    ({ commentId, isLiked, initialLiked }: updateIsLikedParams) => {
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
            updateIsLiked={updateIsLiked}
            key={comment.parent.id}
          />
          {comment.children.map((child) => (
            <Item
              comment={child}
              isChild="true"
              onDelete={onDelete}
              updateIsLiked={updateIsLiked}
              key={child.id}
            />
          ))}
        </Fragment>
      ))}
    </CommentListDiv>
  );
};

export default CommentList;
