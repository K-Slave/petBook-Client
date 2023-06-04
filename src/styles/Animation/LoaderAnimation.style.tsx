import { css } from "styled-components";

const LoaderAnimation = css`
  @keyframes Loader {
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default LoaderAnimation;
