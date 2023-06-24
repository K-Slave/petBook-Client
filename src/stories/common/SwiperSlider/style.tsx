import { createGlobalStyle } from "styled-components";

export const SwiperStyle = createGlobalStyle`
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
    margin-top: 1.25rem;
  }

  .swiper-pagination-bullet {
    width: 0.5rem;
    height: 0.5rem;
    background: var(--black_06);
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 2.5rem;
    background: var(--primary);
    border-radius: 8px;
  }
`;
