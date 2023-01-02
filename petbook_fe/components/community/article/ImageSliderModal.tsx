import { useRecoilState } from "recoil";
import styled from "styled-components";
import { useRef } from "react";
import imageModalState from "@atoms/pageAtoms/community/imageModalState";
import CustomSwiper, {
  SlideNextButton,
  SlidePrevButton,
} from "@components/common/CustomSwiper";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import useClickOutside from "@lib/hooks/common/useClickOutside";
import { Container } from "../CommunityModal/styled";

const prevElId = "swiper_back";
const nextElId = "swiper_forward";

const ImageSliderModal = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [{ show, images, initialImageIndex }, setImageModalState] =
    useRecoilState(imageModalState);
  const closeModal = () =>
    setImageModalState((state) => ({ ...state, show: false }));
  useClickOutside(ref, closeModal);
  return show ? (
    <Container>
      <SliderDiv ref={ref}>
        <SlidePrevButton prevElId={prevElId} />
        <CustomSwiper
          loop
          initialSlide={initialImageIndex}
          prevElId={prevElId}
          nextElId={nextElId}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <Image src={image.imageUrl} layout="fill" objectFit="cover" />
            </SwiperSlide>
          ))}
        </CustomSwiper>
        <SlideNextButton nextElId={nextElId} />
      </SliderDiv>
    </Container>
  ) : null;
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
