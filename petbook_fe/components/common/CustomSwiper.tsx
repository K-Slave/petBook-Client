import React from "react";
import styled, { css } from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperProps, useSwiper } from "swiper/react";

const defaultPrevElId = "swiper_prev";
const defaultNextElId = "swiper_next";

interface Props extends React.PropsWithChildren<SwiperProps> {
    prevElId?: string;
    nextElId?: string;
}

const CustomSwiper = ({ loop, initialSlide, slidesPerView, spaceBetween, prevElId, nextElId, children } : Props) => {
    return (
        <Swiper
          loop={loop}
          navigation={{ prevEl: `#${String(prevElId)}`, nextEl: `#${String(nextElId)}` }}
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
    nextElId: defaultNextElId
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
        <NextButton onClick={onClick} type="button" id={nextElId} />
    );
};

SlideNextButton.defaultProps = {
    nextElId: defaultNextElId
};

export const SlidePrevButton = ({ prevElId }: Pick<Props, "prevElId">) => {
    const swiper = useSwiper();
    const onClick = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };
    return (
        <PrevButton onClick={onClick} type="button" id={prevElId} />
    );
};

SlidePrevButton.defaultProps = {
    prevElId: defaultPrevElId
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
