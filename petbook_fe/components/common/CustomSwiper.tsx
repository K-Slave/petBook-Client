import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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
        <Button onClick={onClick} type="button" id={nextElId}>
            <FiChevronRight />
        </Button>
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
        <Button onClick={onClick} type="button" id={prevElId}>
            <FiChevronLeft />
        </Button>
    );
};

SlidePrevButton.defaultProps = {
    prevElId: defaultPrevElId
};

const Button = styled.button`
    width: 30px;
    height: 30px;
    transform: translateY(-60%);
    svg {
        font-size: 1.3rem;
        color: var(--black_02);
    }
    &:disabled svg {
        color: var(--black_06);
    }
`;
