import { commentState } from "@atoms/pageAtoms/community/commentState";
import localConsole from "@lib/utils/localConsole";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function useCommentForm(initialContent: string) {
    const router = useRouter();
    const setComment = useSetRecoilState(commentState);
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
        const { articleId } = router.query;
        setComment((comment) => {
          const { content, commentId, parentId } = comment;
          localConsole.log(`content: ${content}, commentId: ${commentId || "null"}, parentId: ${parentId || "null"}, articleId: ${articleId as string}`);
          if (content === "") return comment;
          if (commentId === null) {
            // comment_create
          } else {
            // comment_update
          }
          return { content: "", commentId: null, parentId: null };
        });
    };
    useEffect(() => {
        if (initialContent !== "") setComment((comment) => ({ ...comment, content: initialContent }));
    }, []);
    return { onChange, onSubmit };
}
