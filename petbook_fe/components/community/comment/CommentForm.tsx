import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import {
  CommentState,
  commentState,
} from "@atoms/pageAtoms/community/commentState";
import useChangeComment from "@lib/hooks/useChangeComment";
import useSubmitComment from "@lib/hooks/useSubmitComment";
import {
  CommentFormBox,
  StyledSubmitButton,
  UserInfoDiv,
  UserInfoImg,
  WriteCommentTextarea,
} from "./styled/styledCommentForm";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";
const username = "arin";

interface Props {
  initialCommentState?: CommentState;
}

const CommentForm = ({ initialCommentState }: Props) => {
  const setComment = useSetRecoilState(commentState);
  useEffect(() => {
    if (initialCommentState) {
      setComment(initialCommentState);
    }
  }, []);
  return (
    <CommentFormBox>
      <CommentForm.UserInfo />
      <CommentForm.WriteComment initialComment={initialCommentState?.comment} />
      <CommentForm.SubmitButton />
    </CommentFormBox>
  );
};

// ------------------------------------------------------------------

const UserInfo = () => {
  return (
    <UserInfoDiv>
      <UserInfoImg src={avatar} />
      <p>{username}</p>
    </UserInfoDiv>
  );
};

interface WriteCommentProps {
  initialComment?: string;
}

const WriteComment = ({ initialComment }: WriteCommentProps) => {
  const { onChange } = useChangeComment();
  return (
    <WriteCommentTextarea
      placeholder="당신의 의견을 남겨보세요!"
      onChange={onChange}
    >
      {initialComment}
    </WriteCommentTextarea>
  );
};

const SubmitButton = () => {
  const { onSubmit } = useSubmitComment();
  return (
    <StyledSubmitButton type="submit" onClick={onSubmit}>
      등록
    </StyledSubmitButton>
  );
};

WriteComment.defaultProps = {
  initialComment: "",
};

CommentForm.UserInfo = UserInfo;
CommentForm.WriteComment = WriteComment;
CommentForm.SubmitButton = SubmitButton;
CommentForm.defaultProps = {
  initialCommentState: undefined,
};

export default CommentForm;
