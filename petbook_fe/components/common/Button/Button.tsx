import React, { MouseEventHandler, PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Palette from "../../../lib/palette";

type ButtonProps = {
  className?: string;
  children?: any;
  to?: string;
  fullWidth?: boolean;
  fontColor?: string;
  bgColor?: string;
  onClick?: MouseEventHandler;
  style?: React.CSSProperties;
};

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  background: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${(props: ButtonProps) =>
    props.fontColor ? props.fontColor : "black"};
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 0.3rem;

  &:hover {
    background-color: ${(props) => props.fontColor};
    color: #000;
  }

  &:disabled {
    background: ${Palette.gray[3]};
    color: ${Palette.gray[5]};
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

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  return props.to ? (
    <Link prefetch href={props.to} passHref>
      <StyledLink {...props}>{props.children}</StyledLink>
    </Link>
  ) : (
    <StyledButton {...props}>{props.children}</StyledButton>
  );
};

export const BorderButton = (props: PropsWithChildren<ButtonProps>) => {
  return props.to ? (
    <BorderStyledLink {...props}>{props.children}</BorderStyledLink>
  ) : (
    <BorderStyledButton {...props}>{props.children}</BorderStyledButton>
  );
};
