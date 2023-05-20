import { useRouter } from "next/router";
import { CommentItem } from "@lib/API/petBookAPI/types/commentRequest";
import React, {
  Fragment,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import useModal from "@lib/hooks/common/useModal";
import useDeleteComment from "@lib/hooks/comment/useDeleteComment";
import { CommentListDiv } from "./styled";
import CommunityModal from "../../CommunityModal";
import { COMMENT_LIST } from "@lib/resources/commentResource";

export interface ItemProps {
  comment: CommentItem;
  isChild: string;
  clickDeleteMenu: MouseEventHandler<HTMLButtonElement>;
}

interface Props {
  Item: (props: ItemProps) => JSX.Element;
}

const CommentList = ({ Item }: Props) => {
  const router = useRouter();
  const articleId = router.query.articleId as string;
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const queryClient = useQueryClient();
  const { data, fetchNextPage } = useInfiniteQuery(
    COMMENT_LIST.createKey(COMMENT_LIST.name, Number(articleId)),
    ({ pageParam = 0 }) =>
      COMMENT_LIST.fetcher({
        params: {
          articleId: Number(articleId),
          page: pageParam,
          size: 20,
        },
      }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.response.data.page + 1;
      },
      onError: (e) => {
        setHasNextPage(false);
      },
      retry: 0,
    }
  );
  const { openModal, closeModal } = useModal();

  const { deleteComment } = useDeleteComment(async () => {
    closeModal();
    await queryClient.invalidateQueries({
      queryKey: COMMENT_LIST.createKey(COMMENT_LIST.name, Number(articleId)),
    });
  });
  const clickDeleteMenu = (commentId: number) => () => {
    openModal(CommunityModal, {
      modalTitle: "정말 이 댓글을 삭제하시겠습니까?",
      closeModal,
      clickCancelButton: closeModal,
      clickConfirmButton: deleteComment(commentId),
    });
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
      {data?.pages.map(({ response: result }) =>
        result.data.commentList.map((comment) => (
          <Fragment key={comment.parent.id}>
            {!comment.parent.isDeleted && (
              <Item
                comment={comment.parent}
                isChild=""
                clickDeleteMenu={clickDeleteMenu(comment.parent.id)}
                key={comment.parent.id}
              />
            )}
            {comment.children.map((child) => {
              if (!child.isDeleted) {
                return (
                  <Item
                    comment={child}
                    isChild="true"
                    clickDeleteMenu={clickDeleteMenu(child.id)}
                    key={child.id}
                  />
                );
              }
              return null;
            })}
          </Fragment>
        ))
      )}
      <div ref={targetRef} />
    </CommentListDiv>
  );
};

export default CommentList;