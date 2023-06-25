import React, { type PropsWithChildren, type MouseEventHandler } from "react";
import { StyledTypography } from "./style";

export type TypographyVariant =
  | "h1-bold"
  | "h1-medium"
  | "h2-bold"
  | "h2-medium"
  | "h3-bold"
  | "h3-medium"
  | "h4-bold"
  | "h4-medium"
  | "body-default-medium"
  | "body-default-bold"
  | "body-small-medium"
  | "body-small-bold"
  | "label"
  | "button-default"
  | "button-small"
  | "tag-small";

export interface TypographyProps {
  color?: React.CSSProperties["color"];
  align?: React.CSSProperties["textAlign"];
  className?: string;
  style?: React.CSSProperties;
  tag: keyof JSX.IntrinsicElements;
  variant: TypographyVariant;
  onClick?: MouseEventHandler;
}

const Typography = ({
  color,
  align,
  style,
  tag,
  children,
  ...props
}: PropsWithChildren<TypographyProps>) => {
  const customStyle = {
    ...style,
    textAlign: align,
    color,
  };
  return (
    <StyledTypography {...props} as={tag} style={customStyle}>
      {children}
    </StyledTypography>
  );
};

Typography.defaultProps = {
  align: "inherit" as const,
  color: "inherit" as const,
};

export default Typography;
