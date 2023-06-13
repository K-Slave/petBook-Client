import styled from "styled-components";
import CustomSwiper from "@/stories/common/SwiperSlider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import Modal from "@/stories/common/Modal";

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
  return (
    <Modal closeModal={closeModal} modalBox={false}>
      <SliderDiv>
        <CustomSwiper
          loop
          id="Image_Slider_Modal"
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
        </CustomSwiper>
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
