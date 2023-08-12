import Image from "next/image";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import Modal from "@/stories/common/Modal";
import SwiperSlider, { SlideButton } from "@/stories/common/SwiperSlider";
import { ChevronLeftRounded } from "@/stories/Icon/ChevronLeft";
import { ChevronRightRounded } from "@/stories/Icon/ChevronRight";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";

interface Props {
  images: ArticleResponse["images"];
  alt: string;
  initialImageIndex: number;
  closeModal: () => void;
}

const ImageSliderModal = ({
  images,
  alt,
  initialImageIndex,
  closeModal,
}: Props) => {
  const prevButtonId = "Image_Slider_Modal_Prev";
  const nextButtonId = "Image_Slider_Modal_Next";
  return (
    <Modal closeModal={closeModal}>
      <SliderDiv>
        <SlideButton id={prevButtonId} prevOrnext="prev">
          <ChevronLeftRounded />
        </SlideButton>
        <SwiperSlider
          loop
          prevButtonId={prevButtonId}
          nextButtonId={nextButtonId}
          initialSlide={initialImageIndex}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                src={image.imageUrl}
                alt={alt}
                fill
                sizes="500px"
                style={{ objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </SwiperSlider>
        <SlideButton id={nextButtonId} prevOrnext="next">
          <ChevronRightRounded />
        </SlideButton>
      </SliderDiv>
    </Modal>
  );
};

const SliderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .swiper-wrapper {
    max-width: 500px;
    max-height: 500px;
    width: 70vmin;
    height: 70vmin;
  }
  svg {
    color: black;
  }
  img {
    border-radius: 24px;
  }
`;

export default ImageSliderModal;
