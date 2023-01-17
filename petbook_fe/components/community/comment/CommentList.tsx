import { COMMENT_LIST } from "@pages/community/list/[articleId]";
import { useRouter } from "next/router";
import { CommentItem } from "@lib/API/petBookAPI/types/commentRequest";
import React, {
  Fragment,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { commentRequest } from "@lib/API/petBookAPI";
import { CommentListDiv } from "./styled/styledCommentList";

export interface ItemProps {
  comment: CommentItem;
  isChild: string;
  onDelete: MouseEventHandler<HTMLButtonElement>;
}

interface Props {
  Item: (props: ItemProps) => JSX.Element;
}

const CommentList = ({ Item }: Props) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const articleId = router.query.articleId as string;
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const { data, fetchNextPage } = useInfiniteQuery(
    [...COMMENT_LIST.key, articleId],
    ({ pageParam = 0 }) =>
      COMMENT_LIST.fetcher({
        articleId: Number(articleId),
        page: pageParam,
        size: 20,
      }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.data.page + 1;
      },
      onError: (e) => {
        setHasNextPage(false);
      },
      retry: 0,
    }
  );

  const { mutate: deleteComment } = useMutation(commentRequest.comment_delete);
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
            await queryClient.invalidateQueries([
              ...COMMENT_LIST.key,
              articleId,
            ]);
          },
          onError: () => {
            alert("댓글 삭제에 실패했습니다. 다시 시도해주세요 😢");
          },
        }
      );
    }
  };

  useEffect(() => {
    if (!hasNextPage) return () => {};
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        fetchNextPage().catch((e) => {
          console.log(e);
        });
      }
    });
    if (targetRef && targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef && targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [hasNextPage]);

  return (
    <CommentListDiv>
      {data?.pages.map(({ data: result }) =>
        result.commentList.map((comment) => (
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
        ))
      )}
      <div ref={targetRef} />
    </CommentListDiv>
  );
};

export default CommentList;
