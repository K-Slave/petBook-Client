import { BsArrowReturnRight } from "react-icons/bs";
import useResource, { useSetResource } from "@lib/hooks/common/useResource";
import { COMMENT_DELETE, COMMENT_LIST } from "@pages/community/[articleId]";
import { useRouter } from "next/router";
import { CommentItem } from "@lib/API/petBookAPI/types/commentRequest";
import React, { Fragment, MouseEventHandler } from "react";
import { useQueryClient } from "react-query";
import CommonInfo from "../CommonInfo";
import { CommentListDiv, NormalItemDiv, LikeButton, ScrapButton, QnaItemDiv, QnaItemBubble } from "./styled/styledCommentList";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

interface Props {
  Item: (props: ItemProps) => JSX.Element;
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
          <Item
            comment={comment.parent}
            isChild=""
            onDelete={onDelete}
            key={comment.parent.id}
          />
          {comment.children.map((child) => (
            <Item
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

export const NormalItem = ({ comment, isChild, onDelete }: ItemProps) => {
  const { user, createdAt, content, likeCount, id, articleId } = comment;
  return (
    <NormalItemDiv isChild={isChild}>
      {isChild && <BsArrowReturnRight />}
      <div>
        <div className="NormalItem_Row">
          <CommonInfo
            username={user.nickname}
            date={createdAt}
            avatar={avatar}
            year={1}
          />
        </div>
        <p className="Item_Content">{content}</p>
        <div className="Item_Button_Box">
          <div>
            <LikeButton type="button" />
            <span>{likeCount}</span>
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

export const QnaItem = ({ comment, isChild, onDelete } : ItemProps) => {
  const { user, createdAt, content, likeCount, id, articleId } = comment;
  return (
    <QnaItemDiv>
      <CommonInfo
        username={user.nickname}
        date={createdAt}
        avatar={avatar}
        year={1}
      />
      <QnaItemBubble>
        <p className="Item_Content">{content}</p>
        <div className="Item_Button_Box">
          <div>
            <LikeButton type="button" />
            <span>{likeCount}</span>
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

export default CommentList;
