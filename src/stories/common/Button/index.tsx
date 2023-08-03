import React, { type PropsWithChildren } from "react";
import { StyledButton } from "./style";
import type { TypographyVariant } from "../Typography";

interface CommonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hidden?: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  hoverColor?: string;
  hoverBgColor?: string;
  typography?: TypographyVariant;
  color?: string;
}

export type ButtonProps = CommonProps &
  (
    | {
        variant?: "primary" | "secondary" | "tertiary" | "tertiary-active";
        width?: string;
        height?: string;
        bgColor?: string;
      }
    | {
        variant: "small";
        bgColor: string;
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
  disabled: false,
  width: "100%",
  height: "3.25rem",
  hidden: false,
};

export default Button;
