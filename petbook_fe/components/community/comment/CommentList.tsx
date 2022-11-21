import { BsThreeDotsVertical, BsArrowReturnRight } from "react-icons/bs";
import useResource, { useSetResource } from "@lib/hooks/common/useResource";
import { COMMENT_DELETE, COMMENT_LIST } from "@pages/community/[articleId]";
import { useRouter } from "next/router";
import { CommentItem } from "@lib/API/petBookAPI/types/commentRequest";
import React, { Fragment, MouseEventHandler, useState } from "react";
import { useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";
import commentState from "@atoms/pageAtoms/community/commentState";
import useChangeComment from "@lib/hooks/comment/useChangeComment";
import useSelectorState from "@lib/hooks/common/useSelectorState";
import useRecoilSelector from "@lib/hooks/common/useRecoilSelector";
import DetailCommonInfo from "../DetailCommonInfo";
import { CommentListDiv, ItemDiv } from "./styled/styledCommentList";
import { CommentFormMain } from "./CommentForm";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const CommentList = () => {
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
          onSuccess: async () => {
            await queryClient.invalidateQueries(
              `${COMMENT_LIST.key}_${articleId}`
            );
          },
          onError: () => {
            alert("댓글 삭제에 실패했습니다. 다시 시도해주세요 😢");
          },
        }
      );
    }
  };

  return (
    <CommentListDiv>
      {data?.data.map((comment) => (
        <Fragment key={comment.parent.id}>
          <CommentList.Item
            comment={comment.parent}
            isChild=""
            onDelete={onDelete}
            key={comment.parent.id}
          />
          {comment.children.map((child) => (
            <CommentList.Item
              comment={child}
              isChild="true"
              onDelete={onDelete}
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
}

const Item = ({ comment, isChild, onDelete }: ItemProps) => {
  const { user, createdAt, content, likeCount, id, articleId } = comment;
  return (
    <ItemDiv isChild={isChild}>
      {isChild && <BsArrowReturnRight />}
      <div>
        <div className="Item_Row">
          <DetailCommonInfo
            username={user.nickname}
            date={createdAt.split("T")[0]}
            avatar={avatar}
          />
          <div>
            <button type="button">수정</button>
            <button type="button" data-commentid={id} onClick={onDelete}>
              삭제
            </button>
          </div>
        </div>
        <p className="Item_Content">{content}</p>
        <div className="Item_Button_Box">
          <button type="button">대댓글 달기</button>
          <button type="button">좋아요 버튼</button>
        </div>
      </div>
    </ItemDiv>
  );
};

CommentList.Item = Item;

export default CommentList;
