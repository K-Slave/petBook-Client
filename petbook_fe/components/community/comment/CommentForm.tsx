import useChangeComment from "@lib/hooks/comment/useChangeComment";
import useSubmitComment from "@lib/hooks/comment/useSubmitComment";
import { useRef } from "react";
import {
  CommentFormBox,
  CommentFormButton,
  CommentFormTextarea,
} from "./styled/styledCommentForm";

const CommentForm = ({
  initialContent,
}: {
  initialContent?: string;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { onChange } = useChangeComment();
  const { onSubmit } = useSubmitComment(textareaRef);
  return (
    <CommentFormBox>
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

export default CommentForm;
