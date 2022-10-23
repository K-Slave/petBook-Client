import styled from "styled-components";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CommentSection = () => {
  return (
    <Section>
      <CommentList />
      <CommentForm />
    </Section>
  );
};

export default CommentSection;
