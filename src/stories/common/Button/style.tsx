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
  font-weight: 400;
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

const SmallButtonStyle = css`
  width: fit-content;
  height: fit-content;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0.25rem 1rem;
  border-radius: 40px;
`;

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  line-height: 24px;

  border-radius: 8px;
  transition: all 0.3s ease;

  ${(props) =>
    props.variant === "small"
      ? css`
          ${SmallButtonStyle};
          background-color: ${props.bgColor};
          color: ${props.color};
        `
      : css`
          width: ${props.width};
          height: ${props.height};
        `};
  ${(props) =>
    props.variant === "primary"
      ? PrimaryStyle
      : props.variant === "secondary"
      ? SecondaryStyle
      : props.variant === "tertiary"
      ? props.active
        ? TertiaryActiveStyle
        : TertiaryStyle
      : null};
  &:disabled {
    color: var(--black_05);
    background-color: var(--black_07);
  }
`;
