import { createGlobalStyle } from "styled-components";

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
