import styled from "styled-components";

export const SliderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 1.875rem;
  height: 1.875rem;
  transform: translateY(-60%);
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  z-index: 1;
  svg {
    font-size: 1rem;
    color: var(--black_01);
  }
  &:disabled svg {
    color: var(--black_06);
  }
`;
