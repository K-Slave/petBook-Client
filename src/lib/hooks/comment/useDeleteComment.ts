import { commentRequest } from "@lib/API/petBookAPI";
import { useMutation } from "@tanstack/react-query";

export default function useDeleteComment(onSuccess: () => Promise<void>) {
  const { mutate } = useMutation(commentRequest.comment_delete);
  const deleteComment = (commentId: number) => () => {
    if (commentId === undefined) {
      alert("댓글 삭제에 실패했습니다. 다시 시도해주세요 😢");
    } else {
      mutate(
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
  return { deleteComment };
}
