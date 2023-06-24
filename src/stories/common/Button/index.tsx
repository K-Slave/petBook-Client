import React, { type PropsWithChildren } from "react";
import { StyledButton } from "./style";
import type { TypographyVariant } from "../Typography";

interface CommonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  hidden?: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  hoverColor?: string;
  hoverBgColor?: string;
  typography?: TypographyVariant;
}

export type ButtonProps = CommonProps &
  (
    | {
        variant?: "primary" | "secondary" | "tertiary";
        width?: string;
        height?: string;
        bgColor?: string;
        color?: string;
      }
    | {
        variant: "small";
        bgColor: string;
        color: string;
      }
  );

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
  active: false,
  disabled: false,
  width: "100%",
  height: "3.25rem",
  hidden: false,
};

export default Button;
