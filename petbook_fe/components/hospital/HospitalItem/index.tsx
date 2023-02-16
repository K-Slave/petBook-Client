import { BookmarkBlankIcon } from "@components/common/icon/Bookmark";
import CustomSwiper, {
  SlideNextButton,
  SlidePrevButton,
} from "@components/common/Slider";
import navigator from "@lib/modules/navigator";
import type { HospitalInfo } from "@lib/API/petBookAPI/types/hospitalRequest";
import { SwiperSlide } from "swiper/react";
import PossibleAnimalList from "@components/common/hospital/PossibleAnimalList";
import HospitalBasicInfo from "@components/common/hospital/HospitalBasicInfo";
import Stats from "@components/common/hospital/Stats";
import { ImageSliderDiv, ItemHeader } from "./styled";

const HospitalItem = ({ id, name, address }: HospitalInfo) => {
  const navigateToDetail = () => {
    navigator({
      url: `/hospitalmap?id=${id}`,
      options: {
        shallow: true,
      },
    });
  };
  return (
    <article>
      <HospitalItem.ImageSlider id={id} />
      <ItemHeader>
        <h1 onClick={navigateToDetail}>{name}</h1>
        <button type="button">
          <BookmarkBlankIcon />
        </button>
      </ItemHeader>
      <PossibleAnimalList />
      <HospitalBasicInfo address={address} />
      <Stats />
      {/* 리뷰 좋았어요 나빴어요 */}
    </article>
  );
};

const ImageSlider = ({ id }: { id: number }) => {
  const prevElId = `slider_prev_${id}`;
  const nextElId = `slider_next_${id}`;
  return (
    <ImageSliderDiv>
      <SlidePrevButton prevElId={prevElId} />
      <CustomSwiper loop prevElId={prevElId} nextElId={nextElId}>
        <SwiperSlide>illust</SwiperSlide>
        <SwiperSlide>asdfasdf</SwiperSlide>
      </CustomSwiper>
      <SlideNextButton nextElId={nextElId} />
    </ImageSliderDiv>
  );
};

HospitalItem.ImageSlider = ImageSlider;
export default HospitalItem;
