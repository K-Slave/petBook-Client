import React from "react";
import { SkeletonDiv } from "./style";

type SkeletonCSS = React.CSSProperties & {
  "--template"?: string;
};

export interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
  template?: "normal" | "white";
  animation?: boolean;
  copy?: number;
}

const templateBgColor = (template: SkeletonProps["template"]) => {
  switch (template) {
    case "normal": {
      return "rgba(200, 200, 200, 0.3)";
    }

    case "white": {
      return "#fff";
    }

    default:
      return "rgba(200, 200, 200, 0.3)";
  }
};

const Skeleton = ({
  width,
  height,
  borderRadius,
  style,
  template,
  animation,
  copy,
}: SkeletonProps) => {
  const skeletonStyle: SkeletonCSS = {
    ...style,
    width,
    height,
    borderRadius,
  };

  if (template === "white") {
    skeletonStyle.background = templateBgColor(template);
  }

  if (animation === false) {
    skeletonStyle.animation = "none";
    skeletonStyle.WebkitAnimation = "none";
  }

  if (copy) {
    return (
      <>
        {Array(copy)
          .fill("")
          .map((_, index) => (
            <SkeletonDiv
              className="Skeleton__Box"
              style={skeletonStyle}
              key={index}
            />
          ))}
      </>
    );
  }

  return <SkeletonDiv className="Skeleton__Box" style={skeletonStyle} />;
};

Skeleton.defaultProps = {
  width: "100%",
  height: "100%",
  borderRadius: "",
  style: {},
  template: "normal",
  animation: true,
  copy: 0,
};

export default React.memo(Skeleton);
