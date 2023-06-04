import { css } from "styled-components";

const SkeletonAnimation = css`
  @keyframes skeletonLoad {
    0%,
    60% {
      background-position: 120% 0;
    }
    100% {
      background-position: -50% 0;
    }
  }
`;

export default SkeletonAnimation;
