import commentState from "@atoms/pageAtoms/community/commentState";
import { COMMENT_CREATE, COMMENT_UPDATE } from "@pages/community/[articleId]";
import { useRouter } from "next/router";
import { MutableRefObject, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useSetResource } from "../common/useResource";

export default function useCommentForm({
  initialContent,
  textareaRef,
}: {
  initialContent: string;
  textareaRef: MutableRefObject<HTMLTextAreaElement | null>;
}) {
  const router = useRouter();
  const setComment = useSetRecoilState(commentState);
  const { mutate: createComment, isSuccess: isCreateSuccess } =
    useSetResource(COMMENT_CREATE);
  const { mutate: updateComment, isSuccess: isUpdateSuccess } = useSetResource(COMMENT_UPDATE);
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setComment((comment) => ({ ...comment, content: value }));
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { articleId } = router.query as { articleId: string };
    setComment((comment) => {
      const { content, commentId, parentId } = comment;
      if (content === "") return comment;
      if (commentId === null) {
        createComment({
          body: { content, parentId, articleId: Number(articleId) },
          headerObj: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwZXRib29rIiwiaWF0IjoxNjY4ODIxMTk0LCJlbWFpbCI6InRlc3RAcGV0Ym9vay5jb20ifQ.JNGsNT7Y_VsIbibvF4IHL6svArDwF0MHmbd9gM3xqcs`,
          },
        });
      } else {
        /*
        updateComment({
          body: { content },
          pathParam: String(commentId),
          headerObj: {
            Authorization: `Bearer ${String(process.env.NEXT_PUBLIC_TOKEN)}`,
          },
        });
        */
      }
      /*
      console.log(
        `content: ${content}, commentId: ${commentId || "null"}, parentId: ${
          parentId || "null"
        }, articleId: ${articleId}`
      );
      */
      if (textareaRef.current != null) textareaRef.current.value = "";
      return { content: "", commentId: null, parentId: 0 };
    });
  };
  useEffect(() => {
    if (initialContent !== "") {
      setComment((comment) => ({ ...comment, content: initialContent }));
    }
  }, []);
  return { onChange, onSubmit, isCreateSuccess, isUpdateSuccess };
}
