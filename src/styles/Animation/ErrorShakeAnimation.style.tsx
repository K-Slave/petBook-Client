import { css } from "styled-components";

const ErrorShakeAnimation = css`
  @keyframes errorShake {
    50% {
      transform: translate3d(-3px, 0, 0);
    }
    100% {
      transform: translate3d(3px, 0, 0);
    }
  }
`;

export default ErrorShakeAnimation;
