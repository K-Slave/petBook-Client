import styled from "styled-components";

const LikeButtonBox = styled.button<{ isLiked: string }>`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${({ isLiked }) => (isLiked ? "var(--primary)" : "var(--black_03)")};
`;

export default LikeButtonBox;
