import styled from "styled-components";

const LikeButton = styled.button<{ isLiked: string }>`
  width: 24px;
  height: 24px;
  & + .Item_likeCount {
    color: ${({ isLiked }) => (isLiked ? "var(--primary)" : "var(--black_03)")};
  }
  background-image: ${({ isLiked }) =>
    isLiked
      ? "url('/img/common/heart_filled.svg')"
      : "url('/img/common/heart_blank.svg')"};
  background-repeat: no-repeat;
  background-position: center center;
`;

export default LikeButton;
