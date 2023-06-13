import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperProps, useSwiper } from "swiper/react";
import { SliderButton, SwiperStyle } from "./SwiperSlider.styled";
import { ChevronRightRounded } from "@/stories/Icon/ChevronRight";
import { ChevronLeftRounded } from "@/stories/Icon/ChevronLeft";

interface Props extends SwiperProps {
  id: string;
  buttonClassNames?: [string, string];
}

const CustomSwiper = ({ children, id, buttonClassNames, ...props }: Props) => {
  const prevElId = `swiper_${id}_prev`;
  const nextElId = `swiper_${id}_next`;
  return (
    <>
      <SwiperStyle spaceBetween={props.spaceBetween} />
      <SlidePrevButton
        id={prevElId}
        className={buttonClassNames ? buttonClassNames[0] : ""}
      />
      <Swiper
        navigation={{
          prevEl: `#${prevElId}`,
          nextEl: `#${nextElId}`,
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        {...props}
      >
        {children}
      </Swiper>
      <SlideNextButton
        id={nextElId}
        className={buttonClassNames ? buttonClassNames[1] : ""}
      />
    </>
  );
};

export default CustomSwiper;

interface ButtonProps {
  id: string;
  className: string;
}

export const SlideNextButton = ({ id, className }: ButtonProps) => {
  const swiper = useSwiper();
  const onClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  return (
    <SliderButton onClick={onClick} type="button" id={id} className={className}>
      <ChevronRightRounded />
    </SliderButton>
  );
};

export const SlidePrevButton = ({ id, className }: ButtonProps) => {
  const swiper = useSwiper();
  const onClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  return (
    <SliderButton onClick={onClick} type="button" id={id} className={className}>
      <ChevronLeftRounded />
    </SliderButton>
  );
};
