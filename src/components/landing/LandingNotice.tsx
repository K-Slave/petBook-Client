import React, { PropsWithChildren } from "react";
import {
  LandingNoticeContentP,
  LandingNoticeIframe,
  LandingNoticeSection,
} from "./LandingNotice.style";

const LandingNotice = () => {
  return (
    <LandingNotice.Wrap>
      <LandingNotice.Img />
      <LandingNotice.Content />
    </LandingNotice.Wrap>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return <LandingNoticeSection>{children}</LandingNoticeSection>;
};

const Img = () => {
  return (
    <LandingNoticeIframe src="https://embed.lottiefiles.com/animation/6873">
      {/* <iframe src="https://embed.lottiefiles.com/animation/143979"></iframe>
      <iframe src="https://embed.lottiefiles.com/animation/142631"></iframe> */}
    </LandingNoticeIframe>
  );
};

const Content = () => {
  return (
    <LandingNoticeContentP>
      아직은 서비스를 이용하실 수 없어요
      <br />
      펫북의 작가들이 열심히 준비중 이에요
      {/* <span className="Notice__Last">Comming Soon</span> */}
    </LandingNoticeContentP>
  );
};

LandingNotice.Wrap = Wrap;
LandingNotice.Img = Img;
LandingNotice.Content = Content;

export default LandingNotice;
