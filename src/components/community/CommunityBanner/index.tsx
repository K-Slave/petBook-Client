import React from "react";
import { SwiperSlide } from "swiper/react";
import CustomSwiper, {
  SlidePrevButton,
  SlideNextButton,
} from "@components/common/Slider";
import { CommunityBannerBox, AboutSlideBox } from "./styled";

const CommunityBanner = () => {
  return (
    <CommunityBannerBox>
      <SlidePrevButton />
      <CustomSwiper loop>
        <SwiperSlide>
          <AboutSlide />
        </SwiperSlide>
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

AboutSlide.displayName = "AboutSlide";

export default React.memo(CommunityBanner);
