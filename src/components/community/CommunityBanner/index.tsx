import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperSlider, { SlideButton } from "@/stories/common/SwiperSlider";
import { CommunityBannerBox, SlideBox } from "./styled";
import { ChevronLeftRounded } from "@/stories/Icon/ChevronLeft";
import { ChevronRightRounded } from "@/stories/Icon/ChevronRight";

const CommunityBanner = () => {
  const prevButtonId = "Community_Banner_Prev_Button";
  const nextButtonId = "Community_Banner_Next_Button";
  return (
    <CommunityBannerBox>
      <SlideButton id={prevButtonId} prevOrnext="prev">
        <ChevronLeftRounded />
      </SlideButton>
      <SwiperSlider
        loop
        prevButtonId={prevButtonId}
        nextButtonId={nextButtonId}
      >
        <SwiperSlide>
          <AboutSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SlideBox>Slide 2</SlideBox>
        </SwiperSlide>
        <SwiperSlide>
          <SlideBox>Slide 3</SlideBox>
        </SwiperSlide>
      </SwiperSlider>
      <SlideButton id={nextButtonId} prevOrnext="next">
        <ChevronRightRounded />
      </SlideButton>
    </CommunityBannerBox>
  );
};

const AboutSlide = () => {
  return (
    <SlideBox>
      <div>
        <p>시스템 내용이 들어갑니다 최대 제목 26자입니다</p>
        <p>상세한 내용 역시 최대 한줄이 들어갑니다 공백 포함 최대 45자입니다</p>
      </div>
    </SlideBox>
  );
};

export default React.memo(CommunityBanner);
