import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Palette from "../../lib/palette";

type ContentProps = {
  to: any;
  fontcolor: string;
  fullWidth: boolean;
  children: any;
};

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  background: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${(props: ContentProps) => (props.fontcolor ? props.fontcolor : "black")};
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 0.3rem 0.5rem 0.4rem 0.6rem;

  &:hover {
    background-color: ${(props) => props.fontcolor};
    color: white;
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
  border-color: ${(props) => props.fontcolor};
`;

const BorderStyledLink = styled.a`
  ${buttonStyle}
  border: 2px solid;
  border-color: ${(props) => props.fontcolor};
`;

export const Button = (props: PropsWithChildren<ContentProps>) => {
  return props.to ? (
    <Link prefetch href={props.to} passHref>
      <StyledLink {...props} />
    </Link>
  ) : (
    <StyledButton {...props} />
  );
};

export const BorderButton = (props: PropsWithChildren<ContentProps>) => {
  return props.to ? <BorderStyledLink {...props} /> : <BorderStyledButton {...props} />;
};
