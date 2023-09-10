import styled from "styled-components";
import { TextBodyMedium14 } from "../../Typography/style";

const StyledCommonInput = styled.input<{
  width?: string;
  height?: string;
  placeholderColor?: string;
}>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "3rem"};

  border-radius: 8px;
  border: 1px solid #fff;

  background-color: #fff;

  ${TextBodyMedium14}
  color: var(--black_02);

  &:focus {
    border: 1px solid var(--black_04);
    box-shadow: 0px 20px 16px -20px var(--shadow_01);
  }

  &.valid {
    border: 1px solid var(--black_04);
  }

  &.invalid {
    border: 1px solid var(--error);
  }

  &::placeholder {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    letter-spacing: -0.02em;
    color: ${({ placeholderColor }) =>
      placeholderColor || "var(--disabled-font)"};
  }
`;

export default StyledCommonInput;
