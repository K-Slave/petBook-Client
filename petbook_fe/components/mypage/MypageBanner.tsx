import Image from "next/image";
import React from "react";
import mypageImg from "resource/mypageImg";
import styled from "styled-components";

const MypageBannerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
`;

const MypageBannerImage = styled(Image)``;

const MypageBanner = () => {
  return (
    <MypageBannerDiv className="Mypage__Banner__Wrap">
      <MypageBannerImage
        className="Mypage__Banner__Img"
        src={mypageImg.banner}
        fill
        sizes="1920px"
        alt="마이페이지 배너"
      />
    </MypageBannerDiv>
  );
};

export default MypageBanner;
