import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperProps, useSwiper } from "swiper/react";
import { SliderButton } from "./styled";

const defaultPrevElId = "swiper_prev";
const defaultNextElId = "swiper_next";

interface Props extends React.PropsWithChildren<SwiperProps> {
  prevElId?: string;
  nextElId?: string;
}

const CustomSwiper = ({
  loop,
  initialSlide,
  slidesPerView,
  spaceBetween,
  prevElId,
  nextElId,
  children,
}: Props) => {
  return (
    <Swiper
      loop={loop}
      navigation={{
        prevEl: `#${String(prevElId)}`,
        nextEl: `#${String(nextElId)}`,
      }}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      initialSlide={initialSlide}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
    >
      {children}
    </Swiper>
  );
};

CustomSwiper.defaultProps = {
  prevElId: defaultPrevElId,
  nextElId: defaultNextElId,
};

export default CustomSwiper;

export const SlideNextButton = ({ nextElId }: Pick<Props, "nextElId">) => {
  const swiper = useSwiper();
  const onClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  return (
    <SliderButton onClick={onClick} type="button" id={nextElId}>
      <FiChevronRight />
    </SliderButton>
  );
};

SlideNextButton.defaultProps = {
  nextElId: defaultNextElId,
};

export const SlidePrevButton = ({ prevElId }: Pick<Props, "prevElId">) => {
  const swiper = useSwiper();
  const onClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  return (
    <SliderButton onClick={onClick} type="button" id={prevElId}>
      <FiChevronLeft />
    </SliderButton>
  );
};

SlidePrevButton.defaultProps = {
  prevElId: defaultPrevElId,
};
