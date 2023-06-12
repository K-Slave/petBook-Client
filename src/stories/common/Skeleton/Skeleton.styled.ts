import styled, { keyframes } from "styled-components";

const skeletonLoad = keyframes`
  0%,
  60% {
    background-position: 120% 0;
  }
  100% {
    background-position: -50% 0;
  }
`;

export const SkeletonDiv = styled.div`
  background: linear-gradient(
    120deg,
    #e5e5e5 41%,
    #f0f0f0 44%,
    #f0f0f0 46%,
    #e5e5e5 49%
  );
  border-radius: 1rem;
  background-size: 200% 100%;
  animation: ${skeletonLoad} 2.25s infinite;
`;
