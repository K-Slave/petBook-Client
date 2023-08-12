import Image from "next/image";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const ImageSliderDiv = styled.div<{ cnt: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
