import styled from "styled-components";
import Image from "next/image";
import { SliderButton } from "@components/common/Slider/styled";

export const ImageSliderDiv = styled.div<{ cnt: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  margin-bottom: ${({ cnt }) => cnt === 1 && "20px"};
  .swiper-wrapper {
    margin-bottom: ${({ cnt }) => (cnt === 1 ? "0" : "20px")};
  }
  .swiper-slide {
    position: relative;
    width: 354px !important;
    height: 354px;
  }
  .swiper-pagination {
    display: none;
  }
  ${SliderButton} {
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

export const ImageSliderImg = styled(Image)`
  border-radius: 16px;
  cursor: pointer;
  object-fit: cover;
`;
