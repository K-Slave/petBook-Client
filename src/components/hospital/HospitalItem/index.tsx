import { BookmarkOutline } from "@/stories/Icon/Bookmark";
import SwiperSlider, { SlideButton } from "@/stories/common/SwiperSlider";
import navigator from "@lib/modules/navigator";
import type { HospitalFullInfo } from "@lib/API/petBookAPI/types/hospitalRequest";
import { saveScrollPosition } from "@lib/modules/localStorage";

import { SwiperSlide } from "swiper/react";
import { MutableRefObject } from "react";
import PossibleAnimalList from "@components/hospital/PossibleAnimalList";
import { PointReviewList } from "@components/hospital/HospitalReviewList";
import HospitalBasicInfo from "@components/hospital/HospitalBasicInfo";
import Stats from "@components/hospital/Stats";
import { ImageSliderDiv, ItemHeader } from "./styled";
import { ChevronLeftRounded } from "@/stories/Icon/ChevronLeft";
import { ChevronRightRounded } from "@/stories/Icon/ChevronRight";

const HospitalItem = ({
  hospitals,
  parent,
}: {
  hospitals: HospitalFullInfo;
  parent: MutableRefObject<HTMLElement | null>;
}) => {
  const navigateToDetail = () => {
    saveScrollPosition(parent.current?.scrollTop || 0);
    navigator({
      url: `/hospitalmap?id=${hospitals.hospitals.id.toString()}`,
      options: {
        shallow: true,
      },
    });
  };
  const prevButtonId = `Hospital_Item_${hospitals.hospitals.id}_Prev`;
  const nextButtonId = `Hospital_Item_${hospitals.hospitals.id}_Next`;
  const slideButtonStyle = {
    position: "absolute" as const,
    top: "50%",
    transform: "translateY(-50%)",
  };
  return (
    <article>
      <ImageSliderDiv>
        <SlideButton
          prevOrnext="prev"
          id={prevButtonId}
          width="1.25rem"
          height="1.25rem"
          style={{
            ...slideButtonStyle,
            left: "10px",
          }}
        >
          <ChevronLeftRounded height="0.625rem" />
        </SlideButton>
        <SwiperSlider
          loop
          prevButtonId={prevButtonId}
          nextButtonId={nextButtonId}
        >
          <SwiperSlide>illust</SwiperSlide>
          <SwiperSlide>asdfasdf</SwiperSlide>
        </SwiperSlider>
        <SlideButton
          prevOrnext="next"
          id={nextButtonId}
          width="1.25rem"
          height="1.25rem"
          style={{
            ...slideButtonStyle,
            right: "10px",
          }}
        >
          <ChevronRightRounded height="0.625rem" />
        </SlideButton>
      </ImageSliderDiv>
      <ItemHeader>
        <h1 onClick={navigateToDetail}>{hospitals.hospitals.name}</h1>
        <button type="button">
          <BookmarkOutline />
        </button>
      </ItemHeader>
      <PossibleAnimalList />
      <HospitalBasicInfo address={hospitals.hospitals.address} />
      <Stats />
      <PointReviewList {...hospitals} />
    </article>
  );
};

export default HospitalItem;
