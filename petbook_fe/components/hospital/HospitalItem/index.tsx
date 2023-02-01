import { BookmarkBlankIcon } from "@components/common/icon/Bookmark";
import ChevronDown from "@components/common/icon/ChevronDown";
import ChevronUp from "@components/common/icon/ChevronUp";
import ClockIcon from "@components/common/icon/Clock";
import FaceHappy from "@components/common/icon/FaceHappy";
import MarkerPin from "@components/common/icon/MarkerPin";
import CustomSwiper, {
  SlideNextButton,
  SlidePrevButton,
} from "@components/common/Slider";
import Image from "next/image";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Badge, ImageSliderDiv, AnimalListBox, ItemArticle } from "./styled";

interface Props {
  id: number;
}

const HospitalItem = ({ id }: Props) => {
  return (
    <ItemArticle>
      <HospitalItem.ImageSlider id={id} />
      <div className="Item_Heading">
        <h1>병원 이름이 들어갑니다</h1>
        <button type="button">
          <BookmarkBlankIcon />
        </button>
      </div>
      <HospitalItem.AnimalList />
      <ul className="Item_Info_List">
        <li>
          <span>
            <MarkerPin />
            위치
          </span>
          <span>위치가 들어갑니다</span>
        </li>
        <li>
          <span>
            <ClockIcon />
            시간
          </span>
          <span>화요일 9:00~12:00</span>
          <HospitalItem.TimeBox />
          <Badge textColor="#00DD6D" bgColor="rgba(0, 221, 109, 0.12)">
            현재 진료 가능
          </Badge>
        </li>
      </ul>
      <div className="Item_Stats">
        <span>리뷰 999+</span>
        <span>책갈피 999+</span>
      </div>
      {/* 리뷰 좋았어요 나빴어요 */}
    </ItemArticle>
  );
};

const AnimalList = () => {
  const ANIMALS = ["토끼", "고슴도치", "햄스터", "조류"];
  const getAnimalIconImage = (animal: string) => {
    switch (animal) {
      case "토끼":
        return "/img/rabbit.png";
      case "햄스터":
        return "/img/hamster.png";
      case "고슴도치":
        return "/img/hedgehog.png";
      default:
        return "/img/hamster.png";
    }
  };
  return (
    <AnimalListBox>
      <div>
        <h2>
          <FaceHappy /> 진료 가능한 동물
        </h2>
        <Badge textColor="#ED9B00" bgColor="#FFE0A7">
          펫북 인증 완료
        </Badge>
      </div>
      <ul>
        {ANIMALS.slice(0, 3).map((animal) => (
          <li key={animal}>
            <span className="icon">
              <Image
                width={16}
                height={16}
                alt="hamster"
                src={getAnimalIconImage(animal)}
              />
            </span>
            <span>{animal}</span>
          </li>
        ))}
        {ANIMALS.length > 3 && (
          <li>
            <span className="icon">
              <Image
                width={16}
                height={16}
                alt="hamster"
                src="/img/hamster.png"
              />
            </span>
            <span>+{ANIMALS.length - 3}</span>
          </li>
        )}
      </ul>
    </AnimalListBox>
  );
};

const ImageSlider = ({ id }: Props) => {
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

const TimeBox = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow((value) => !value);
  };
  return (
    <button type="button" className="up-down-button" onClick={toggle}>
      {show ? <ChevronUp /> : <ChevronDown />}
    </button>
  );
};

HospitalItem.AnimalList = AnimalList;
HospitalItem.ImageSlider = ImageSlider;
HospitalItem.TimeBox = TimeBox;

export default HospitalItem;
