import { css } from "styled-components";

const SlideAnimation = css`
  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(1.25rem);
    }

    30% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default SlideAnimation;
