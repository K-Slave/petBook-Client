import commentState from "@atoms/pageAtoms/community/commentState";
import { CommentErrorResponse } from "@lib/API/petBookAPI/types/commentRequest";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { commentRequest } from "@lib/API/petBookAPI";
import useUserInfo from "../common/useUserInfo";

export default function useSubmitComment(onSuccess: () => Promise<unknown>) {
  const router = useRouter();
  const { userData } = useUserInfo();
  const setComment = useSetRecoilState(commentState);
  const { mutate: createComment, isLoading: isCreating } = useMutation(
    commentRequest.comment_create
  );
  const { mutate: updateComment, isLoading: isUpdating } = useMutation(
    commentRequest.comment_update
  );
  const { articleId } = router.query;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userData) {
      alert("🔒 로그인해주세요!");
      return;
    }
    setComment((comment) => {
      const { content, commentId, parentId } = comment;
      console.log(content, commentId, parentId);
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
      }
      return { content: "", commentId: null, parentId: null };
    });
  };
  return { onSubmit, isLoading: isCreating || isUpdating };
}
