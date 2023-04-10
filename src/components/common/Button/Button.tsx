import React, { MouseEventHandler, PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const buttonStyle = css`
  padding: 0.3rem;

  transition: all 0.3s ease-in-out;

  background: transparent;
  cursor: pointer;

  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: ${(props: ButtonProps) =>
    props.fontColor ? props.fontColor : "black"};

  &:hover {
    background-color: ${(props) => props.fontColor};
    color: #000;
  }

  &:disabled {
    background: #e9ecef;
    color: #ced4da;
    cursor: not-allowed;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled.a`
  ${buttonStyle}
`;

const BorderStyledButton = styled.button`
  ${buttonStyle}
  border: 2px solid;
  border-color: ${(props) => props.fontColor};
`;

const BorderStyledLink = styled.a`
  ${buttonStyle}
  border: 2px solid;
  border-color: ${(props) => props.fontColor};
`;

export type ButtonProps = {
  className?: string;
  children?: any;
  to?: string;
  fullWidth?: boolean;
  fontColor?: string;
  bgColor?: string;
  onClick?: MouseEventHandler;
  style?: React.CSSProperties;
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { to, children } = props;

  return to ? (
    <Link href={to} prefetch passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </Link>
  ) : (
    <StyledButton {...props}>{children}</StyledButton>
  );
};

Button.defaultProps = {
  className: "",
  children: () => {},
  to: "",
  fullWidth: true,
  fontColor: "",
  bgColor: "",
  onClick: () => {},
  style: {},
};

export const BorderButton = (props: PropsWithChildren<ButtonProps>) => {
  const { to, children } = props;

  return to ? (
    <BorderStyledLink {...props}>{children}</BorderStyledLink>
  ) : (
    <BorderStyledButton {...props}>{children}</BorderStyledButton>
  );
};

BorderButton.defaultProps = {
  className: "",
  children: () => {},
  to: "",
  fullWidth: true,
  fontColor: "",
  bgColor: "",
  onClick: () => {},
  style: {},
};
