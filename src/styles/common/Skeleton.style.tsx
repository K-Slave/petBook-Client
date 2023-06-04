import { css } from "styled-components";

const SkeletonCommonStyle = css`
  .Skeleton__Box {
    background: linear-gradient(
      120deg,
      #e5e5e5 41%,
      #f0f0f0 44%,
      #f0f0f0 46%,
      #e5e5e5 49%
    );
    background-color: var(--template);

    border-radius: 1rem;
    background-size: 200% 100%;

    /* 해당되는 컴포넌트에 적용 */
    & {
      animation: skeletonLoad 2.25s infinite;
    }
  }
`;

export default SkeletonCommonStyle;
