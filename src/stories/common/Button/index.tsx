import React, { MouseEventHandler, PropsWithChildren } from "react";
import { StyledButton } from "./style";

interface CommonProps {
  id?: string;
  className?: string;
  type?: "button" | "submit";
  active?: boolean;
  onClick?: MouseEventHandler;
  style?: React.CSSProperties;
  disabled?: boolean;
  hidden?: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement>;
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
