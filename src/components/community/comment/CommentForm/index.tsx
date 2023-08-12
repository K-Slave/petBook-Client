import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useRef } from "react";
import Button from "@/stories/common/Button";
import useChangeComment from "@lib/hooks/comment/useChangeComment";
import useSubmitComment from "@lib/hooks/comment/useSubmitComment";
import { COMMENT_LIST } from "@lib/resources/commentResource";
import {
  CommentFormBox,
  CommentFormTextarea,
  RectangleBoxDiv,
  Rectangle,
} from "./styled";

const CommentForm = () => {
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
    <CommentFormBox onSubmit={onSubmit}>
      <RectangleBox />
      <CommentFormTextarea
        placeholder="당신의 의견을 남겨보세요!"
        onChange={onChange}
        ref={textareaRef}
      />
      <Button
        variant="primary"
        type="submit"
        width="120px"
        style={{
          alignSelf: "flex-end",
        }}
      >
        댓글 등록
      </Button>
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
