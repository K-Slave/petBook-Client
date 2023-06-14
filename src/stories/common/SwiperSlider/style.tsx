import styled, { createGlobalStyle } from "styled-components";

export const SliderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 1.875rem;
  height: 1.875rem;
  transform: translateY(-60%);
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  z-index: 1;
  svg {
    font-size: 1rem;
    color: var(--black_01);
  }
  &:disabled svg {
    color: var(--black_06);
  }
`;

export const SwiperStyle = createGlobalStyle<{ spaceBetween?: number }>`
  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .swiper-pagination {
    position: relative;
    margin-top: 20px;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: var(--black_06);
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 40px;
    background: var(--primary);
    border-radius: 8px;
  }
`;
