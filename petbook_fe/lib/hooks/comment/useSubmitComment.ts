import commentState from "@atoms/pageAtoms/community/commentState";
import {
  COMMENT_CREATE,
  COMMENT_LIST,
  COMMENT_UPDATE,
} from "@pages/community/[articleId]";
import { useRouter } from "next/router";
import { MutableRefObject } from "react";
import { useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";
import { useSetResource } from "../common/useResource";

export default function useSubmitComment(
  textareaRef: MutableRefObject<HTMLTextAreaElement | null>
) {
  const setComment = useSetRecoilState(commentState);
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: createComment } = useSetResource(COMMENT_CREATE);
  const { mutate: updateComment } = useSetResource(COMMENT_UPDATE);
  const { articleId } = router.query;

  const onSuccess = async () => {
    if (textareaRef.current != null) textareaRef.current.value = "";
    await queryClient.invalidateQueries(
      `${COMMENT_LIST.key}_${articleId as string}`
    );
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setComment((comment) => {
      const { content, commentId, parentId } = comment;
      if (content === "") return comment;
      if (commentId === null) {
        createComment(
          {
            body: { content, parentId, articleId: Number(articleId) },
          },
          {
            onSuccess,
            onError: () => {
              alert("댓글 등록에 실패했습니다. 다시 등록해주세요 😢");
            },
          }
        );
      } else {
        updateComment(
          {
            body: { content },
            pathParam: String(commentId),
          },
          {
            onSuccess,
            onError: () => {
              alert("댓글 수정에 실패했습니다. 다시 등록해주세요 😢");
            },
          }
        );
      }
      return { content: "", commentId: null, parentId: null };
    });
  };
  return { onSubmit };
}
