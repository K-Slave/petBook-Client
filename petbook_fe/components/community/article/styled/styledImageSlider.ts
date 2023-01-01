import styled from "styled-components";
import Image from "next/image";

export const ImageSliderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  .swiper-slide {
    position: relative;
    width: 354px !important;
    height: 354px;
  }
  .swiper-pagination {
     display: none;
   }
`;

export const ImageSliderImg = styled(Image)`
  border-radius: 16px;
  cursor: pointer;
`;
