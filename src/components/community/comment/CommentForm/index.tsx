import useChangeComment from "@lib/hooks/comment/useChangeComment";
import useSubmitComment from "@lib/hooks/comment/useSubmitComment";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useRef } from "react";
import {
  CommentFormBox,
  CommentFormButton,
  CommentFormTextarea,
  RectangleBoxDiv,
  Rectangle,
} from "./styled";
import { COMMENT_LIST } from "@lib/resources/commentResource";

const CommentForm = ({ initialContent }: { initialContent?: string }) => {
  const queryClient = useQueryClient();
  const { query } = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { onChange } = useChangeComment();
  const { onSubmit } = useSubmitComment(async () => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.value = "";
      await queryClient.invalidateQueries({
        queryKey: COMMENT_LIST.createKey(
          COMMENT_LIST.name,
          Number(query.articleId)
        ),
      });
    }
  });
  return (
    <CommentFormBox>
      <RectangleBox />
      <CommentFormTextarea
        placeholder="당신의 의견을 남겨보세요!"
        onChange={onChange}
        ref={textareaRef}
        defaultValue={initialContent}
      />
      <CommentFormButton className="Primary" type="submit" onClick={onSubmit}>
        {initialContent ? "댓글 수정" : "댓글 등록"}
      </CommentFormButton>
    </CommentFormBox>
  );
};

CommentForm.defaultProps = {
  initialContent: "",
};

const RectangleBox = () => {
  return (
    <RectangleBoxDiv>
      <div>
        <Rectangle />
        <Rectangle />
      </div>
      <div>
        <Rectangle />
        <Rectangle />
      </div>
    </RectangleBoxDiv>
  );
};

export default CommentForm;
