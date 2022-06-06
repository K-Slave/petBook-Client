import { Hash } from "crypto";
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

const SlideListDisplay = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  overflow: auto;
`;

const SlideList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: calc(61.25rem + 3rem + 4rem + 2.75rem + 0.3rem);
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
      return "3rem";
    }

    return "0.5rem";
  }};

  margin-right: ${(props: { idx: number }) => {
    if (props.idx !== 0 && (props.idx + 1) % 5 === 0) {
      return "3rem";
    }

    return "0.5rem";
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

  const [page, setPage] = useState(1);
  const slideRef = useRef<HTMLUListElement>(null);

  const onLeftSlide: MouseEventHandler = () => {
    slideRef.current?.scrollTo({
      top: 0,
      left: -slideRef.current.clientWidth,
      behavior: "smooth",
    });

    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightSlide: MouseEventHandler = () => {
    slideRef.current?.scrollTo({
      top: 0,
      left: slideRef.current.clientWidth,
      behavior: "smooth",
    });

    setPage(page + 1);
  };

  return (
    <CardListSlideBox className={cardname + "Card__List__Slide__Box"}>
      <SlideButton direction='left' onClick={onLeftSlide} />
      <SlideList className={cardname + "Slide__List"} ref={slideRef} {...props}>
        {userNameList.map((item: string, idx: number) => {
          if (idx >= (page - 1) * 5 && idx <= page * 5 - 1) {
            return (
              <SlideItem
                key={item + idx}
                className={cardname + "Slide__Item"}
                idx={idx}
              >
                {children ? (
                  children
                ) : (
                  <ProfileCard
                    key={item + idx}
                    className={cardname + "Profile__Card"}
                    username={item}
                    user_age={userAgeList[idx]}
                    {...props}
                  />
                )}
              </SlideItem>
            );
          }
        })}
      </SlideList>
      <SlideButton direction='right' onClick={onRightSlide} />
    </CardListSlideBox>
  );
}

/* 
  idx / 5 = 0 1/5 2/5 3/5 4/5 || 5/5  page 1
  idx / 10 = 0 1/10 2/10 3/10 4/10 || 5/10 6/10 7/10 8/10 9/10 || 10/10 page 2
  idx / n 이 page-1 보다 크면 렌더링 

*/
