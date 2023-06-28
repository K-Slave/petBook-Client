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

  .Invalid__Error {
    animation: errorShake 0.1s 3;
  }
`;

export default ErrorShakeAnimation;
