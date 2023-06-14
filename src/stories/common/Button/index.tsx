import React, { MouseEventHandler, PropsWithChildren } from "react";
import { StyledButton } from "./style";

interface CommonProps {
  className?: string;
  type?: "button" | "submit";
  active?: boolean;
  onClick?: MouseEventHandler;
  style?: React.CSSProperties;
  disabled?: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement>;
}

export type ButtonProps = CommonProps &
  (
    | {
        variant: "primary" | "secondary" | "tertiary";
        width?: string;
        height?: string;
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
  height: "52px",
};

export default Button;
