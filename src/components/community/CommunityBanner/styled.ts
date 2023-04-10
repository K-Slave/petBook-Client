import styled from "styled-components";

export const CommunityBannerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .swiper-slide {
    height: 220px;
  }
`;

export const AboutSlideBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 60px 40px;
  background-color: #ff6e4e;
  color: var(--bg_white_02);
  border-radius: 16px;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  p:first-child {
    font-weight: 700;
    font-size: 30px;
    line-height: 50px;
  }
  p:last-child {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    opacity: 0.8;
  }
`;
