import styled, { css } from "styled-components";
import {
  TextBodyDefaultBold,
  TextBodyDefaultMedium,
  TextBodySmallMedium,
  TextH4Bold,
  getFontStyle,
} from "../Typography/style";
import type { ButtonProps } from ".";

const PrimaryStyle = css`
  color: var(--bg_white_02);
  background-color: var(--primary);
  ${TextH4Bold};
  &:hover {
    background-color: var(--primary-hover);
  }
`;

const SecondaryStyle = css`
  color: var(--primary);
  background-color: var(--secondary);
  ${TextH4Bold};
  &:hover {
    box-shadow: inset 0px 1px 16px var(--secondary-hover);
  }
`;

const TertiaryStyle = css`
  color: var(--black_01);
  background-color: white;
  ${TextBodyDefaultMedium};
  &:hover {
    box-shadow: inset 0px 1px 16px #dfdfd8;
  }
`;

const TertiaryActiveStyle = css`
  color: var(--bg_white_02);
  background-color: var(--black_01);
  ${TextBodyDefaultBold};
  &:hover {
    box-shadow: none;
  }
`;

const SmallButtonStyle = css`
  padding: 0.25rem 1rem;
  border-radius: 40px;
  ${TextBodySmallMedium};
`;

export const StyledButton = styled.button<ButtonProps>`
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.3s ease;

  ${(props) =>
    props?.variant === "primary"
      ? PrimaryStyle
      : props?.variant === "secondary"
      ? SecondaryStyle
      : props?.variant === "tertiary"
      ? TertiaryStyle
      : props.variant === "tertiary-active"
      ? TertiaryActiveStyle
      : props?.variant === "small"
      ? SmallButtonStyle
      : null};
  ${(props) =>
    css`
      width: ${props.width ||
      (props?.variant === "small" ? "fit-content" : "100%")};
      height: ${props.height ||
      (props?.variant === "small" ? "fit-content" : "3.25rem")};
    `};
  ${(props) =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
    `};
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
  ${(props) =>
    props.hoverBgColor &&
    css`
      &:hover {
        background-color: ${props.hoverBgColor};
      }
    `};
  ${(props) =>
    props.hoverColor &&
    css`
      &:hover {
        color: ${props.hoverColor};
      }
    `};
  ${(props) =>
    props?.variant &&
    css`
      &:disabled {
        color: var(--black_05);
        background-color: var(--black_07);
      }
    `}
  ${(props) => props?.typography && getFontStyle(props.typography)}
`;
