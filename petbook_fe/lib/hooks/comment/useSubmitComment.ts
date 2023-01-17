import commentState from "@atoms/pageAtoms/community/commentState";
import { CommentErrorResponse } from "@lib/API/petBookAPI/types/commentRequest";
import {
  COMMENT_CREATE,
  COMMENT_LIST,
  COMMENT_UPDATE
} from "@pages/community/list/[articleId]";
import { useRouter } from "next/router";
import { MutableRefObject } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { useSetResource } from "../common/useResource";
import useUserId from "../article/useUserId";

export default function useSubmitComment(
  textareaRef: MutableRefObject<HTMLTextAreaElement | null>
) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const userId = useUserId();
  const setComment = useSetRecoilState(commentState);
  const { mutate: createComment } = useSetResource(COMMENT_CREATE);
  const { mutate: updateComment } = useSetResource(COMMENT_UPDATE);
  const { articleId } = router.query;

  const onSuccess = async () => {
    if (textareaRef.current != null) textareaRef.current.value = "";
    await queryClient.invalidateQueries({
      queryKey: [...COMMENT_LIST.key, articleId],
    });
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (userId === null) {
      alert("🔒 로그인해주세요!");
      return;
    }
    setComment((comment) => {
      const { content, commentId, parentId } = comment;
      if (content === "") return comment; // form validation
      if (commentId === null) {
        createComment(
          {
            body: { content, parentId, articleId: Number(articleId) },
          },
          {
            onSuccess,
            onError: (error) => {
              const commentError = error as CommentErrorResponse;
              alert(`${commentError.response.data.message} 😢`);
            },
          }
        );
      } else {
        /*
        updateComment(
          {
            body: { content },
            pathParam: `/${commentId}`,
          },
          {
            onSuccess,
            onError: (error) => {
              const commentError = error as CommentErrorResponse;
              alert(`${commentError.response.data.message} 😢`);
            },
          }
        );
        */
      }
      return { content: "", commentId: null, parentId: null };
    });
  };
  return { onSubmit };
}
