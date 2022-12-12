import React from "react";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const CommunityBannerBox = styled.div`
  display: flex;
  align-items: center;
`;

const CommunityBanner = () => {
  return (
    <CommunityBannerBox>
      <SlidePrevButton />
      <Swiper
        loop
        navigation={{ prevEl: "#swiper-back", nextEl: "#swiper-forward" }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
              <SwiperSlide><AboutSlide /></SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      <SlideNextButton />
    </CommunityBannerBox>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();
  const onClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  return (
    <NextButton onClick={onClick} type="button" id="swiper-forward" />
  );
};

const SlidePrevButton = () => {
  const swiper = useSwiper();
  const onClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  return (
    <PrevButton onClick={onClick} type="button" id="swiper-back" />
  );
};

const buttonStyle = css`
  width: 30px;
  height: 30px;
  transform: translateY(-60%);
`;

const PrevButton = styled.button`
  ${buttonStyle};
  background: url("/img/common/chevron_left.svg") no-repeat center center;
`;

const NextButton = styled.button`
  ${buttonStyle};
  background: url("/img/common/chevron_right.svg") no-repeat center center;
`;

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
