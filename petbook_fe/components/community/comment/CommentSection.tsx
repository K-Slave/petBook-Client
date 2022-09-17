import styled from "styled-components";
import CommentList from "./CommentList";
import WriteComment from "./WriteComment";

const CommentSection = () => {
  return (
    <Section>
      <CommentList />
      <WriteComment />
    </Section>
  );
};

export default CommentSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
