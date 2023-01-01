import imageModalState from "@atoms/pageAtoms/community/imageModalState";
import CustomSwiper, { SlidePrevButton, SlideNextButton } from "@components/common/CustomSwiper";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import { useSetRecoilState } from "recoil";
import { SwiperSlide } from "swiper/react";
import { ImageSliderDiv, ImageSliderImg } from "./styled/styledImageSlider";

interface Props {
    images: ArticleResponse["images"];
}

 const ImageSlider = ({ images }: Props) => {
    const setModalState = useSetRecoilState(imageModalState);
    return (
        <ImageSliderDiv>
            <SlidePrevButton />
            <CustomSwiper slidesPerView="auto" spaceBetween={17}>
            {images.map((image, index) => (
                <SwiperSlide
                  key={image.id}
                  onClick={() =>
                        setModalState({
                            show: true,
                            images,
                            initialImageIndex: index,
                        })
                    }
                >
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
