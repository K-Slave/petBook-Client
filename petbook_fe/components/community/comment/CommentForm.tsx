import useChangeComment from "@lib/hooks/comment/useChangeComment";
import useSubmitComment from "@lib/hooks/comment/useSubmitComment";
import { useRef } from "react";
import {
  CommentFormBox,
  CommentFormButton,
  CommentFormDiv,
  CommentFormTextarea,
  CommentFormMainBox,
} from "./styled/styledCommentForm";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";
const username = "arin";

const CommentForm = () => {
  return (
    <CommentFormBox>
      <CommentFormDiv>
        <img src={avatar} alt="user profile" />
        <p>{username}</p>
      </CommentFormDiv>
      <CommentFormMain />
    </CommentFormBox>
  );
};

export const CommentFormMain = ({
  initialContent,
}: {
  initialContent?: string;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { onChange } = useChangeComment();
  const { onSubmit } = useSubmitComment(textareaRef);
  return (
    <CommentFormMainBox>
      <CommentFormTextarea
        placeholder="당신의 의견을 남겨보세요!"
        onChange={onChange}
        ref={textareaRef}
        defaultValue={initialContent}
      />
      <CommentFormButton type="submit" onClick={onSubmit}>
        {initialContent ? "수정" : "등록"}
      </CommentFormButton>
    </CommentFormMainBox>
  );
};

CommentFormMain.defaultProps = {
  initialContent: "",
};

export default CommentForm;
