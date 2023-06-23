import React, { type PropsWithChildren } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperProps, useSwiper } from "swiper/react";
import { SwiperStyle } from "./style";
import Button, { type ButtonProps } from "../Button";

interface Props extends SwiperProps {
  prevButtonId: string;
  nextButtonId: string;
}

const CustomSwiper = ({
  children,
  prevButtonId,
  nextButtonId,
  ...props
}: Props) => {
  return (
    <>
      <SwiperStyle spaceBetween={props.spaceBetween} />
      <Swiper
        navigation={{
          prevEl: `#${prevButtonId}`,
          nextEl: `#${nextButtonId}`,
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        {...props}
      >
        {children}
      </Swiper>
    </>
  );
};

export default CustomSwiper;

type SlideButtonProps = ButtonProps & {
  id: string;
  className?: string;
  prevOrnext: "prev" | "next";
};

export const SlideButton = ({
  prevOrnext,
  children,
  style,
  ...props
}: PropsWithChildren<SlideButtonProps>) => {
  const swiper = useSwiper();
  const onClick = () => {
    if (!swiper) return;
    if (prevOrnext === "prev") {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };
  const defaultStyle = {
    borderRadius: "50%",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
    flexShrink: "0",
    zIndex: "2",
    transform: "translateY(-60%)",
  };
  return (
    <Button
      {...props}
      onClick={onClick}
      style={{
        ...defaultStyle,
        ...style,
      }}
    >
      {children}
    </Button>
  );
};

SlideButton.defaultProps = {
  variant: "",
  width: "1.875rem",
  height: "1.875rem",
  bgColor: "rgba(255, 255, 255, 0.6)",
};
