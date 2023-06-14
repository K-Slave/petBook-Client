import React, { MouseEventHandler, PropsWithChildren } from "react";
import { StyledButton } from "./style";

export type ButtonProps = {
  variant: "primary" | "secondary" | "tertiary" | "small";
  className?: string;
  width?: string;
  height?: string;
  type?: "button" | "submit";
  bgColor?: string;
  color?: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: MouseEventHandler;
  style?: React.CSSProperties;
};

const Button = ({
  children,
  type,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton type={type || "button"} {...props}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  active: false,
  disabled: false,
  width: "100%",
  height: "52px",
};

export default Button;
