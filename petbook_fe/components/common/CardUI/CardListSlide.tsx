import React, {
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import drag from "../../../lib/drag";
import localConsole from "../../../lib/localConsole";
import throttle from "../../../lib/throttle";
import SlideButton from "../Button/SlideButton";
import ProfileCard from "./ProfileCard";

const CardListSlideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

// const SlideListDisplay = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;

//   padding: 0 2rem;

//   overflow: auto;
// `;

const SlideList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  width: calc(61.25rem + 3rem + 2rem + 2.75rem + 0.375rem);
  height: 14.875rem;

  margin-top: 3.1875rem;

  overflow: auto;

  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox

  &::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }
`;
const SlideItem = styled.li`
  /* margin-left: ${(props: { idx: number }) => {
    if (props.idx % 5 === 0) {
      return "1.5rem";
    }
  }};

  margin-right: ${(props: { idx: number }) => {
    if (props.idx !== 0 && (props.idx + 1) % 5 === 0) {
      return "1.5rem";
    }
  }}; */
`;

export type CardListSlideType = {
  className?: string;
  cardname?: string;
  username?: string;
  image?: string;
  placeNameList?: string[];
  userNameList: string[];
  userAgeList: number[];
  sectionTitle?: string;
};

export default function CardListSlide(
  props: PropsWithChildren<CardListSlideType>
) {
  const {
    cardname,
    image,
    placeNameList,
    userNameList,
    userAgeList,
    children,
  } = props;

  const slideRef = useRef<HTMLUListElement>(null);

  const onLeftSlide: MouseEventHandler = () => {
    slideRef.current?.scrollTo({
      top: 0,
      left: -slideRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const onRightSlide: MouseEventHandler = () => {
    slideRef.current?.scrollTo({
      top: 0,
      left: slideRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <CardListSlideBox className={cardname + ""}>
      <SlideButton direction='left' onClick={onLeftSlide} />
      <SlideList className={cardname + "Slide__List"} ref={slideRef} {...props}>
        {userNameList.map((item: string, idx: number) => {
          return (
            <SlideItem
              key={item}
              className={cardname + "Slide__Item"}
              idx={idx}
            >
              {children ? (
                children
              ) : (
                <ProfileCard
                  username={item}
                  user_age={userAgeList[idx]}
                  {...props}
                />
              )}
            </SlideItem>
          );
        })}
      </SlideList>
      <SlideButton direction='right' onClick={onRightSlide} />
    </CardListSlideBox>
  );
}
