import React from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import CustomSwiper, { SlidePrevButton, SlideNextButton } from "@components/common/CustomSwiper";

const CommunityBannerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .swiper-slide {
    height: 220px;
  }
`;

const CommunityBanner = () => {
  return (
    <CommunityBannerBox>
      <SlidePrevButton />
      <CustomSwiper loop>
          <SwiperSlide><AboutSlide /></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
      </CustomSwiper>
      <SlideNextButton />
    </CommunityBannerBox>
  );
};

const AboutSlide = React.memo(() => {
  return (
    <AboutSlideBox>
      <div>
        <p>시스템 내용이 들어갑니다 최대 제목 26자입니다</p>
        <p>상세한 내용 역시 최대 한줄이 들어갑니다 공백 포함 최대 45자입니다</p>
      </div>
    </AboutSlideBox>
  );
});

const AboutSlideBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 60px 40px;
  background-color: #ff6e4e;
  color: var(--bg_white_02);
  border-radius: 16px;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  p:first-child {
    font-weight: 700;
    font-size: 30px;
    line-height: 50px;
  }
  p:last-child {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    opacity: 0.8;
  }
`;

export default React.memo(CommunityBanner);
