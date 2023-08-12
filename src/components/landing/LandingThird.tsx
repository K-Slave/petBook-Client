import React, { PropsWithChildren } from "react";
import ResponsiveImage from "@/stories/common/Image/ResponsiveImage";
import { LandingThirdSection } from "./LandingThird.style";

const LandingThird = () => {
  return (
    <LandingThird.Wrap>
      <LandingThird.Img />
    </LandingThird.Wrap>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return <LandingThirdSection>{children}</LandingThirdSection>;
};

const Img = () => {
  return (
    <ResponsiveImage
      src="/hospitalMapEx_1.png"
      boxwidth="360px"
      boxheight="200px"
      width={360}
      height={200}
      alt=""
    />
  );
};

// hospitalMapEx_1

LandingThird.Wrap = Wrap;
LandingThird.Img = Img;

export default LandingThird;
