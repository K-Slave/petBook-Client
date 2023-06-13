import type { ButtonProps } from ".";
import styled, { css } from "styled-components";

const PrimaryStyle = css`
  color: var(--bg_white_02);
  background-color: var(--primary);
  font-weight: bold;
  font-size: 1.125rem;
  &:hover {
    background-color: var(--primary-hover);
  }
`;

const SecondaryStyle = css`
  color: var(--primary);
  background-color: var(--secondary);
  font-weight: bold;
  font-size: 1.125rem;
  &:hover {
    box-shadow: inset 0px 1px 16px var(--secondary-hover);
  }
`;

const TertiaryStyle = css`
  color: var(--black_01);
  background-color: white;
  &:hover {
    box-shadow: inset 0px 1px 16px #dfdfd8;
  }
`;

const TertiaryActiveStyle = css`
  font-weight: bold;
  color: var(--bg_white_02);
  background-color: var(--black_01);
  &:hover {
    box-shadow: none;
  }
`;

export const StyledButton = styled.button<
  Pick<ButtonProps, "width" | "variant" | "active" | "height">
>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 24px;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "52px"};
  border-radius: 8px;
  transition: all 0.3s ease;
  ${({ variant }) =>
    variant === "primary"
      ? PrimaryStyle
      : variant === "secondary"
      ? SecondaryStyle
      : TertiaryStyle};
  ${({ variant, active }) =>
    variant === "tertiary" && active && TertiaryActiveStyle};
  &:disabled {
    font-weight: bold;
    font-size: 1.125rem;
    color: var(--black_05);
    background-color: var(--black_07);
  }
`;
