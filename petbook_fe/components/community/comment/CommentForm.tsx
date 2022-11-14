import useCommentForm from "@lib/hooks/comment/useCommentForm";
import { useRef } from "react";
import {
  CommentFormBox,
  CommentFormButton,
  CommentFormDiv,
  CommentFormTextarea,
} from "./styled/styledCommentForm";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";
const username = "arin";

const CommentForm = ({ initialContent } : { initialContent?: string; }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { onChange, onSubmit } = useCommentForm({ initialContent: initialContent || "", textareaRef });
  return (
    <CommentFormBox>
      <CommentFormDiv>
        <img src={avatar} alt="user profile" />
        <p>{username}</p>
      </CommentFormDiv>
      <CommentFormTextarea
        placeholder="당신의 의견을 남겨보세요!"
        onChange={onChange}
        defaultValue={initialContent}
        ref={textareaRef}
      />
      <CommentFormButton type="submit" onClick={onSubmit}>
        등록
      </CommentFormButton>
    </CommentFormBox>
  );
};

CommentForm.defaultProps = {
  initialContent: "",
};

export default CommentForm;
