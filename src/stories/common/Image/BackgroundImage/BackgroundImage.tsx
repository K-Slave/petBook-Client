import React, { AnchorHTMLAttributes } from "react";
import styled, { CSSProperties, css } from "styled-components";
import { BackgroundImageA, BackgroundImageSpan } from "./BackgroundImage.style";

const BgImgA = styled(BackgroundImageA)``;
const BgImgSpan = styled(BackgroundImageSpan)``;

interface Props {
  url: string;
  width: string;
  height: string;
  tag?: "span" | "a" | "div";
  anchorAttr?: AnchorHTMLAttributes<HTMLAnchorElement>;
  display?: CSSProperties["display"];
  bgPosition?: CSSProperties["backgroundPosition"];
}

// Styled Components를 사용한 예시
// Overriding 하여 사용하기 권장
const BackgroundImage = ({
  url,
  width,
  height,
  display,
  bgPosition,
  tag,
  anchorAttr,
}: Props) => {
  if (tag === "div") {
    return (
      <BgImgSpan
        url={url}
        width={width}
        height={height}
        display={display}
        bgPosition={bgPosition}
      />
    );
  }

  if (tag === "a") {
    return (
      <BgImgA
        url={url}
        width={width}
        height={height}
        display={display}
        bgPosition={bgPosition}
        {...anchorAttr}
      />
    );
  }

  return (
    <BgImgSpan
      url={url}
      width={width}
      height={height}
      display={display}
      bgPosition={bgPosition}
    />
  );
};

export default BackgroundImage;
