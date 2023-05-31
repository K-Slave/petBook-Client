import { gsap } from "gsap";
import React, { useLayoutEffect } from "react";
import styled from "styled-components";

const LandingLoopBannerWrapDiv = styled.div`
  position: absolute;
  top: calc(100vh - 5.1563rem - 3.4375rem);
`;

const LandingLoopBannerDiv = styled.div`
  display: flex;

  overflow: hidden;

  width: 100vw;
  height: fit-content;

  .slide {
    display: inline-flex;
    gap: 1.25rem;

    padding: 0 0.625rem;
  }
`;

const IconBoxDiv = styled.div`
  display: grid;
  grid-auto-flow: row;

  width: 3rem;
`;

const IconImgA = styled.a<{ imgUrl: string }>`
  display: block;
  width: 3rem;
  height: 3rem;

  image-rendering: -webkit-optimize-contrast;
  transform: translateZ(0);
  backface-visibility: hidden;

  background-image: url(${(props) => props.imgUrl});
  background-size: 3rem 3rem;
  background-position: center;
`;

const IconCopyDiv = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: 100vw;
`;

const IconImgTextA = styled.a`
  display: inline-flex;
  align-items: center;

  padding: 0.625rem;

  font-size: 0.75rem;
  text-align: center;
  color: #ccc;
`;

const LandingLoopBanner = () => {
  useLayoutEffect(() => {
    const slideCount = document.querySelectorAll(".slide").length;

    const firstSlide = document.querySelector(".slide");
    if (!firstSlide) return;

    const clone1 = firstSlide.cloneNode(true);
    const clone2 = firstSlide.cloneNode(true);
    const clone3 = firstSlide.cloneNode(true);
    const $slider = document.querySelector("#slider");
    if (!$slider) return;

    $slider.appendChild(clone1);
    $slider.appendChild(clone2);
    $slider.appendChild(clone3);

    gsap.to(".slide", {
      x: `-=${100 * slideCount}%`,
      ease: "none",
      repeat: -1, // 무한 반복
      duration: slideCount * 10, // 각 슬라이드가 2초 동안 보이도록 합니다
    });

    return () => {
      $slider.removeChild(clone1);
      $slider.removeChild(clone2);
      $slider.removeChild(clone3);
    };
  }, []);

  return (
    <LandingLoopBannerWrapDiv>
      <LandingLoopBannerDiv id="slider">
        <div className="slide">
          <IconBoxDiv>
            <IconImgA
              target="_blank"
              href="https://icons8.com/icon/5N7Fl28rFEw_/rabbit"
              imgUrl="/icons/icons8-rabbit-96.png"
            />
          </IconBoxDiv>
          <IconBoxDiv>
            <IconImgA
              target="_blank"
              href="https://icons8.com/icon/aKEeT9FEK2cQ/%EA%B3%A0%EC%8A%B4%EB%8F%84%EC%B9%98"
              imgUrl="/icons/icons8-gosum-96.png"
            />
          </IconBoxDiv>
          <IconBoxDiv>
            <IconImgA
              target="_blank"
              href="https://icons8.com/icon/P5jz51DWtv4I/%EB%A7%88%EC%9A%B0%EC%8A%A4-%EB%8F%99%EB%AC%BC"
              imgUrl="/icons/icons8-mouse-96.png"
            />
          </IconBoxDiv>
          <IconBoxDiv>
            <IconImgA
              target="_blank"
              href="hhttps://icons8.com/icon/OClCFhCarb8m/fish"
              imgUrl="/icons/icons8-fish-96.png"
            />
          </IconBoxDiv>
          <IconBoxDiv>
            <IconImgA
              target="_blank"
              href="https://icons8.com/icon/8S7SkmQtNOry/%EB%B1%80"
              imgUrl="/icons/icons8-snake-96.png"
            />
          </IconBoxDiv>
          <IconBoxDiv>
            <IconImgA
              target="_blank"
              href="https://icons8.com/icon/8uUpoMsM4WMd/%EC%96%91"
              imgUrl="/icons/icons8-sheep-96.png"
            />
          </IconBoxDiv>
          <IconBoxDiv>
            <IconImgA
              target="_blank"
              href="https://icons8.com/icon/SFUN6DqJTqwG/woodpecker"
              imgUrl="/icons/icons8-woodpecker-96.png"
            />
          </IconBoxDiv>
          <IconBoxDiv>
            <IconImgA
              target="_blank"
              href="https://icons8.com/icon/OClCFhCarb8m/fish"
              imgUrl="/icons/icons8-fish-96.png"
            />
          </IconBoxDiv>
          <IconBoxDiv>
            <IconImgA
              target="_blank"
              href="https://icons8.com/icon/t37RqElMGb3l/%EB%B0%B1%EC%A1%B0"
              imgUrl="/icons/icons8-backjo-96.png"
            />
          </IconBoxDiv>
          <IconBoxDiv>
            <IconImgA
              target="_blank"
              href="https://icons8.com/icon/DPKGTkO02XSs/%EB%B9%84%EB%B2%84"
              imgUrl="/icons/icons8-biber-96.png"
            />
          </IconBoxDiv>
          <IconBoxDiv>
            <IconImgA
              target="_blank"
              href="https://icons8.com/icon/PI2iDb1j6Nxf/deer"
              imgUrl="/icons/icons8-deer-96.png"
            />
          </IconBoxDiv>
          <IconBoxDiv>
            <IconImgA
              target="_blank"
              href="https://icons8.com/icon/UoIYjsa9KdQ7/lizard"
              imgUrl="/icons/icons8-lizard-96.png"
            />
          </IconBoxDiv>
          <IconBoxDiv>
            <IconImgA
              target="_blank"
              href="https://icons8.com/icon/kkjBrqTcWZwu/%EB%B2%A8%EB%A1%9C%EC%8B%9C-%EB%9E%A9%ED%84%B0"
              imgUrl="/icons/icons8-raptor-96.png"
            />
          </IconBoxDiv>
        </div>
      </LandingLoopBannerDiv>
      <IconCopyDiv className="slider__text">
        <IconImgTextA target="_blank" href="https://icons8.com">
          icon by Icons8
        </IconImgTextA>
      </IconCopyDiv>
    </LandingLoopBannerWrapDiv>
  );
};

{
  /* <IconImgTextA target="_blank" href="https://icons8.com">
        icon by Icons8
      </IconImgTextA>
       */
}
export default LandingLoopBanner;
