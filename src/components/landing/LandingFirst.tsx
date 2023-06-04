import React, { PropsWithChildren } from "react";
import {
  LandingFirstSection,
  LandingFirstTitleH1,
  LandingImageBoxDiv,
} from "./LandingFirst.style";
import ResponsiveImage from "@/stories/common/Image/ResponsiveImage";

const LandingFirst = () => {
  return (
    <LandingFirst.Wrap>
      <LandingFirst.Title />
    </LandingFirst.Wrap>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return <LandingFirstSection>{children}</LandingFirstSection>;
};

const Title = () => {
  return (
    <LandingFirstTitleH1
      style={{ opacity: 0 }}
      onAnimationEnd={(e) => {
        e.currentTarget.style.removeProperty("opacity");
        const $Button = document.body.querySelector<HTMLButtonElement>(
          ".Welcome__Request__Button"
        );
        if ($Button) {
          $Button.style.removeProperty("animation-play-state");
        }
      }}
    >
      <span className="Landing__Title">특별한 동물을 위한 특별한 전자책</span>
      <span className="Landing__Subtitle">이색동물 커뮤니티 PetBook</span>
    </LandingFirstTitleH1>
  );
};

const Icons = () => {
  return (
    <LandingImageBoxDiv>
      <ResponsiveImage
        src="/Landing__Background.png"
        boxwidth="20vw"
        boxheight="20vw"
        imgFillWidth="26.041667vw"
        imgFillHeight="26.041667vw"
        style={{ opacity: "0.4", zIndex: "0" }}
        alt="배경 이미지"
        fill
      />
    </LandingImageBoxDiv>
  );
};

LandingFirst.Wrap = Wrap;
LandingFirst.Title = Title;
LandingFirst.Icons = Icons;

export default LandingFirst;
