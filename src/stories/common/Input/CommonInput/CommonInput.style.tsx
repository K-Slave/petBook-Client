import styled from "styled-components";

const StyledCommonInput = styled.input<{ width?: string; height?: string }>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "3rem"};
  padding: 1rem 1.25rem 0.9375rem;

  border-radius: 8px;
  border: solid 1px #fff;

  background-color: #fff;

  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  letter-spacing: -0.02em;
  color: var(--black_02);

  &:focus {
    border: solid 1px var(--black_04);
    box-shadow: 0px 20px 16px -20px var(--shadow_01);
  }

  &.valid {
    border: solid 1px var(--black_04);
  }

  &.invalid {
    border: solid 1px var(--error);
  }

  &::placeholder {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    letter-spacing: -0.02em;
    color: var(--disabled-font);
  }
`;

export default StyledCommonInput;
