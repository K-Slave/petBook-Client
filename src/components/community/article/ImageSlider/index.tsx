import SwiperSlider, { SlideButton } from "@/stories/common/SwiperSlider";
import { ChevronLeftRounded } from "@/stories/Icon/ChevronLeft";
import { ChevronRightRounded } from "@/stories/Icon/ChevronRight";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import useModal from "@lib/hooks/common/useModal";
import ImageSliderModal from "../ImageSliderModal";
import { ImageSliderDiv, ImageSliderImg, StyledSwiperSlide } from "./styled";

interface Props {
  images: ArticleResponse["images"];
  alt: string;
}

const ImageSlider = ({ images, alt }: Props) => {
  const prevButtonId = "Image_Slider_Prev";
  const nextButtonId = "Image_Slider_Next";
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
        <ImageSliderImg
          src={images[0].imageUrl}
          alt="이미지"
          width={354}
          height={354}
          priority
          onClick={onClickSlide(0)}
        />
      ) : (
        <>
          <SlideButton id={prevButtonId} prevOrnext="prev">
            <ChevronLeftRounded />
          </SlideButton>
          <SwiperSlider
            prevButtonId={prevButtonId}
            nextButtonId={nextButtonId}
            slidesPerView="auto"
            spaceBetween={17}
            pagination={false}
          >
            {images.map((image, index) => (
              <StyledSwiperSlide key={image.id}>
                <ImageSliderImg
                  src={image.imageUrl}
                  alt={alt}
                  fill
                  priority
                  sizes="354px"
                  onClick={onClickSlide(index)}
                />
              </StyledSwiperSlide>
            ))}
          </SwiperSlider>
          <SlideButton id={nextButtonId} prevOrnext="next">
            <ChevronRightRounded />
          </SlideButton>
        </>
      )}
    </ImageSliderDiv>
  );
};

export default ImageSlider;
