import React, { MouseEventHandler, PropsWithChildren } from "react";
import { StyledButton } from "./Button.styled";

export type ButtonProps = {
  className?: string;
  width?: string;
  height?: string;
  type?: "button" | "submit";
  variant: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  onClick?: MouseEventHandler;
  style?: React.CSSProperties;
  active?: boolean;
};

const Button = ({
  className,
  width,
  height,
  variant,
  disabled,
  children,
  onClick,
  style,
  active,
  type,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton
      type={type || "button"}
      className={className}
      disabled={disabled}
      onClick={onClick}
      style={style}
      width={width}
      height={height}
      variant={variant}
      active={active}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
