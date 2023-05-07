import Image from "next/image";
import React, { useEffect, useRef } from "react";
import mypageImg from "image/mypageImg";
import styled from "styled-components";

const MypageBannerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
`;

const MypageBannerImage = styled(Image)`
  object-fit: cover;

  width: 100%;

  opacity: 0;
`;

const MypageBanner = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (imgRef.current) {
        imgRef.current.style.opacity = "1";
      }
    }, 150);
  }, [imgRef]);

  return (
    <MypageBannerDiv>
      <MypageBannerImage
        className="Mypage__Banner__Img"
        ref={imgRef}
        src={mypageImg.banner}
        fill
        sizes="1920px"
        alt="마이페이지 배너"
      />
    </MypageBannerDiv>
  );
};

export default MypageBanner;
