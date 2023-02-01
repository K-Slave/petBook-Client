import { SliderButton } from "@components/common/Slider/styled";
import styled from "styled-components";

export const ItemArticle = styled.article`
  .Item_Heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.75rem 0.5rem;
    color: var(--black_01);
  }
  .Item_Stats {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    font-weight: 500;
    color: var(--black_04);
  }
  .Item_Info_List {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0 0.5rem;
    margin: 0.75rem 0 1.5rem;
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--black_03);
      font-weight: 500;
      font-size: 16px;
      & > span:first-child {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        color: var(--black_06);
      }
    }
  }
`;

export const AnimalListBox = styled.div`
  background-color: #ffefd1;
  border-radius: 12px;
  padding: 0.75rem;
  & > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 0.75rem;
    & > h2 {
      display: flex;
      align-items: flex-end;
      gap: 0.3rem;
      color: var(--black_01);
      font-size: 14px;
      font-weight: bold;
    }
  }
  & > ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    & > li {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: var(--black_04);
      font-size: 14px;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: white;
    }
    img {
      width: auto;
      object-fit: cover;
    }
  }
`;

export const ImageSliderDiv = styled.div`
  position: relative;
  height: 180px;
  background: #e1e1e1;
  border-radius: 12px;
  ${SliderButton} {
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    z-index: 2;
    transform: translateY(-50%);
    &:first-child {
      left: 10px;
    }
    &:last-child {
      right: 10px;
    }
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
  }
`;

export const Badge = styled.div<{
  textColor: string;
  bgColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  color: ${({ textColor }) => textColor};
  background: ${({ bgColor }) => bgColor};
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
`;
