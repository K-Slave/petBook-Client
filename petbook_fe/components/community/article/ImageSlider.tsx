import CustomSwiper, {
  SlidePrevButton,
  SlideNextButton,
} from "@components/common/Slider";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import useModal from "@lib/hooks/common/useModal";
import { SwiperSlide } from "swiper/react";
import ImageSliderModal from "./ImageSliderModal";
import { ImageSliderDiv, ImageSliderImg } from "./styled/styledImageSlider";

interface Props {
  images: ArticleResponse["images"];
}

const ImageSlider = ({ images }: Props) => {
  const { closeModal, openModal } = useModal();
  const onClickSlide = (index: number) => () => {
    openModal(ImageSliderModal, {
      images,
      closeModal,
      initialImageIndex: index,
    });
  };
  return (
    <ImageSliderDiv>
      <SlidePrevButton />
      <CustomSwiper slidesPerView="auto" spaceBetween={17}>
        {images.map((image, index) => (
          <SwiperSlide key={image.id} onClick={onClickSlide(index)}>
            <ImageSliderImg
              src={image.imageUrl}
              layout="fill"
              objectFit="cover"
              priority
            />
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <SlideNextButton />
    </ImageSliderDiv>
  );
};

export default ImageSlider;
