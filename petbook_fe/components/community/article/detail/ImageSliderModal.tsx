/* eslint-disable react/no-array-index-key */
import { useRecoilValue } from "recoil";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import styled, { css } from "styled-components";
import { useRef } from "react";
import imageModalState from "@atoms/pageAtoms/community/imageModalState";
import useSlider from "./useSliderModal";
import useClickOutside from "./useClickOutside";

const Container = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(30px);
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const Slider = styled.div`
  display: flex;
  max-width: 600px;
  max-height: 600px;
  border-radius: 24px;
  overflow: hidden;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;

  border: 3px solid #000000;
  border-radius: 26px;
  background: #d9d9d9;

  svg {
    font-size: 30px;
  }
`;

const StyledImage = styled.img<{
  position: "current" | "prev" | "next";
  index: number;
}>`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
  transform: ${({ position, index }) =>
    position === "current"
      ? `translateX(${-(index * 100)}%)`
      : position === "prev"
      ? `translateX(${-(index * 100) - 100}%)`
      : `translateX(${-(index * 100) + 100}%)`};
  opacity: ${({ position }) => (position === "current" ? "1" : "0")};
`;

const BarWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const Bar = styled.button<{ current: boolean }>`
  border-radius: 24px;
  height: 6px;
  ${({ current }) =>
    current
      ? css`
          width: 80px;
          background-color: #000;
        `
      : css`
          width: 15px;
          background-color: #fff;
        `}
`;

const ImageSliderModal = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { show, currentIndex, prevIndex, images } =
    useRecoilValue(imageModalState);
  const { moveNext, movePrev, changeCurrentIndex, closeModal } = useSlider(
    images.length
  );
  useClickOutside(ref, closeModal);
  return (
    <Container show={show}>
      <SliderWrapper ref={ref}>
        <Button onClick={movePrev}>
          <IoChevronBack />
        </Button>
        <Slider>
          {images.map((image, index) => (
            <StyledImage
              src={image}
              key={index}
              index={index}
              position={
                index === currentIndex
                  ? "current"
                  : index === prevIndex
                  ? "prev"
                  : "next"
              }
            />
          ))}
        </Slider>
        <Button onClick={moveNext}>
          <IoChevronForward />
        </Button>
      </SliderWrapper>
      <BarWrapper>
        {Array(images.length)
          .fill(0)
          .map((_, index) => (
            <Bar
              key={index}
              current={index === currentIndex}
              onClick={() => changeCurrentIndex(index)}
            />
          ))}
      </BarWrapper>
    </Container>
  );
};

export default ImageSliderModal;
