import styled from "styled-components";
import CustomSwiper, {
  SlideNextButton,
  SlidePrevButton,
} from "@components/common/Slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import Modal from "@/stories/common/Modal";

const prevElId = "image_slider_modal_back";
const nextElId = "image_slider_modal_forward";

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
        {images.length !== 1 && <SlidePrevButton prevElId={prevElId} />}
        <CustomSwiper
          loop
          initialSlide={initialImageIndex}
          prevElId={prevElId}
          nextElId={nextElId}
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
        {images.length !== 1 && <SlideNextButton nextElId={nextElId} />}
      </SliderDiv>
    </Modal>
  );
};

const SliderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .swiper-wrapper {
    position: relative;
    max-width: 500px;
    max-height: 500px;
    width: 70vmin;
    height: 70vmin;
  }
  img {
    border-radius: 24px;
  }
  svg {
    color: black;
  }
`;

export default ImageSliderModal;
