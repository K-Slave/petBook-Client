import CustomSwiper, {
  SlidePrevButton,
  SlideNextButton,
} from "@components/common/Slider";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import useModal from "@lib/hooks/common/useModal";
import { SwiperSlide } from "swiper/react";
import ImageSliderModal from "../ImageSliderModal";
import { ImageSliderDiv, ImageSliderImg } from "./styled";

interface Props {
  images: ArticleResponse["images"];
  alt: string;
}

const ImageSlider = ({ images, alt }: Props) => {
  const { closeModal, openModal } = useModal();
  const onClickSlide = (index: number) => () => {
    openModal(ImageSliderModal, {
      images,
      alt,
      closeModal,
      initialImageIndex: index,
    });
  };
  return (
    <ImageSliderDiv cnt={images.length}>
      {images.length === 1 ? (
        <SwiperSlide key={images[0].id} onClick={onClickSlide(0)}>
          <ImageSliderImg src={images[0].imageUrl} alt="이미지" fill priority />
        </SwiperSlide>
      ) : (
        <>
          <SlidePrevButton />
          <CustomSwiper slidesPerView="auto" spaceBetween={17}>
            {images.map((image, index) => (
              <SwiperSlide key={image.id} onClick={onClickSlide(index)}>
                <ImageSliderImg
                  src={image.imageUrl}
                  alt={alt}
                  fill
                  priority
                  sizes="354px"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAKCAYAAACjd+4vAAAAHElEQVR42mNsa26oZxgAwDhq8ajFoxaPWkwuAAC9bRRbgijH+QAAAABJRU5ErkJggg=="
                />
              </SwiperSlide>
            ))}
          </CustomSwiper>
          <SlideNextButton />
        </>
      )}
    </ImageSliderDiv>
  );
};

export default ImageSlider;
