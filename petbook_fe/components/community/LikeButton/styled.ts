import styled from "styled-components";

const LikeButtonBox = styled.button<{ isLiked: string }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 16px;
  color: ${({ isLiked }) => (isLiked ? "var(--primary)" : "var(--black_03)")};
`;

export default LikeButtonBox;
