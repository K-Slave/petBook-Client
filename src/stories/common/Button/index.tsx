import React, { type PropsWithChildren } from "react";
import { StyledButton } from "./style";
import type { TypographyVariant } from "../Typography";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "tertiary-active" | "small";
  width?: string;
  height?: string;
  hidden?: boolean;
  color?: string;
  hoverColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
  typography?: TypographyVariant;
  buttonRef?: React.RefObject<HTMLButtonElement>;
}

const Button = ({
  children,
  buttonRef,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton ref={buttonRef} {...props}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button" as const,
  disabled: false,
  hidden: false,
};

export default Button;
