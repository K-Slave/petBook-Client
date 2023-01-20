import styled from "styled-components";
import { useRef } from "react";
import CustomSwiper, {
  SlideNextButton,
  SlidePrevButton,
} from "@components/common/Slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import useClickOutside from "@lib/hooks/common/useClickOutside";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import { Container } from "../../CommunityModal/styled";

const prevElId = "swiper_back";
const nextElId = "swiper_forward";

interface Props {
  images: ArticleResponse["images"];
  initialImageIndex: number;
  closeModal: () => void;
}

const ImageSliderModal = ({ images, initialImageIndex, closeModal }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, closeModal);
  return (
    <Container>
      <SliderDiv ref={ref}>
        {images.length !== 1 && <SlidePrevButton prevElId={prevElId} />}
        <CustomSwiper
          loop
          initialSlide={initialImageIndex}
          prevElId={prevElId}
          nextElId={nextElId}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <Image src={image.imageUrl} alt="이미지" fill sizes="500px" />
            </SwiperSlide>
          ))}
        </CustomSwiper>
        {images.length !== 1 && <SlideNextButton nextElId={nextElId} />}
      </SliderDiv>
    </Container>
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
    color: #000;
  }
`;

export default ImageSliderModal;
