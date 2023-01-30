import Image, { ImageProps } from "next/image";
import React from "react";
import styled from "styled-components";

interface ResponsiveImageSpanProps {
  width: string;
  height: string;
}

const ResponsiveImageSpan = styled.span<ResponsiveImageSpanProps>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const ResponsiveNextImage = styled(Image)`
  object-fit: contain;
`;

interface Props extends ImageProps {
  boxWidth: string;
  boxHeight: string;
}

const ResponsiveImage = (props: Props) => {
  const { boxWidth, boxHeight } = props;
  return (
    <ResponsiveImageSpan width={boxWidth} height={boxHeight}>
      <ResponsiveNextImage {...props} />
    </ResponsiveImageSpan>
  );
};

export default ResponsiveImage;
