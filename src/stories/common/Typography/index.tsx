import React, { type PropsWithChildren } from "react";
import { StyledTypography } from "./style";

export type Variant =
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

interface Props {
  color?: string;
  align?: React.CSSProperties["textAlign"];
  className?: string;
  style?: React.CSSProperties;
  tag: keyof JSX.IntrinsicElements;
  variant: Variant;
}

const Typography = ({
  color,
  align,
  className,
  style,
  tag,
  variant,
  children,
}: PropsWithChildren<Props>) => {
  const customStyle = {
    ...style,
    textAlign: align,
    color,
  };
  return (
    <StyledTypography
      as={tag}
      variant={variant}
      style={customStyle}
      className={className}
    >
      {children}
    </StyledTypography>
  );
};

Typography.defaultProps = {
  align: "inherit",
  color: "inherit",
};

export default Typography;
