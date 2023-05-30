import Image, { ImageProps } from "next/image";
import React from "react";
import styled from "styled-components";

interface ResponsiveImageSpanProps {
  width?: string;
  height?: string;
}

interface ImageContainerProps extends ResponsiveImageSpanProps {
  imgFillWidth?: string;
  imgFillHeight?: string;
}

const ResponsiveImageSpan = styled.span<ResponsiveImageSpanProps>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const ResponsiveImageContainerSpan = styled.span<ImageContainerProps>`
  position: absolute;

  width: ${(props) => (props.imgFillWidth ? props.imgFillWidth : props.width)};
  height: ${(props) =>
    props.imgFillHeight ? props.imgFillHeight : props.height};
`;

const ResponsiveNextImage = styled(Image)`
  /* image-rendering: -webkit-optimize-contrast; */

  object-fit: contain;

  transform: translateZ(0);
  backface-visibility: hidden;
`;

interface Props extends ImageProps {
  boxwidth?: string;
  boxheight?: string;
  imgFillWidth?: string;
  imgFillHeight?: string;
}

const ResponsiveImage = (props: Props) => {
  const { boxwidth, boxheight, imgFillWidth, imgFillHeight } = props;
  return (
    <ResponsiveImageSpan width={boxwidth} height={boxheight}>
      <ResponsiveImageContainerSpan
        width={boxwidth}
        height={boxheight}
        imgFillWidth={imgFillWidth}
        imgFillHeight={imgFillHeight}
      >
        <ResponsiveNextImage
          width={props.width}
          height={props.height}
          fill={props.fill}
          alt={props.alt}
          src={props.src}
          priority={props.priority}
          style={props.style}
        />
      </ResponsiveImageContainerSpan>
    </ResponsiveImageSpan>
  );
};

export default ResponsiveImage;
