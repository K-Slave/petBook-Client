import { BookmarkBlankIcon } from "@components/common/icon/Bookmark";
import CustomSwiper, {
  SlideNextButton,
  SlidePrevButton,
} from "@components/common/Slider";
import navigator from "@lib/modules/navigator";
import type { HospitalFullInfo } from "@lib/API/petBookAPI/types/hospitalRequest";
import { saveScrollPosition } from "@lib/modules/localStorage";
import { SwiperSlide } from "swiper/react";
import { MutableRefObject, RefObject } from "react";
import PossibleAnimalList from "@components/common/hospital/PossibleAnimalList";
import { PointReviewList } from "@components/common/hospital/HospitalReviewList";
import HospitalBasicInfo from "@components/common/hospital/HospitalBasicInfo";
import Stats from "@components/common/hospital/Stats";
import { ImageSliderDiv, ItemHeader } from "./styled";

const HospitalItem = (
  hospitals: HospitalFullInfo,
  parent: MutableRefObject<HTMLElement | null>
) => {
  const navigateToDetail = () => {
    console.log(parent);
    saveScrollPosition(parent.current?.scrollTop || 0);
    navigator({
      url: `/hospitalmap?id=${hospitals.hospitals.id.toString()}`,
      options: {
        shallow: true,
      },
    });
  };
  return (
    <article>
      <HospitalItem.ImageSlider id={hospitals.hospitals.id} />
      <ItemHeader>
        <h1 onClick={navigateToDetail}>{hospitals.hospitals.name}</h1>
        <button type="button">
          <BookmarkBlankIcon />
        </button>
      </ItemHeader>
      <PossibleAnimalList />
      <HospitalBasicInfo address={hospitals.hospitals.address} />
      <Stats />
      <PointReviewList {...hospitals} />
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
