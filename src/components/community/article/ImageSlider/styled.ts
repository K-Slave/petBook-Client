import styled from "styled-components";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export const ImageSliderDiv = styled.div<{ cnt: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  button {
    position: absolute;
    z-index: 2;
    top: 50%;
    &:first-child {
      left: 0;
      transform: translate(-50%, -50%);
    }
    &:last-child {
      right: 0;
      transform: translate(50%, -50%);
    }
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 354px;
  height: 354px;
`;

export const ImageSliderImg = styled(Image)`
  border-radius: 16px;
  cursor: pointer;
  object-fit: cover;
`;
