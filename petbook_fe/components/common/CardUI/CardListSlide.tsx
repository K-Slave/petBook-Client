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
import drag from "../../../lib/handler/drag";
import localConsole from "../../../lib/utils/localConsole";
import throttle from "../../../lib/modules/throttle";
import SlideButton from "../Button/SlideButton";
import ProfileCard from "./ProfileCard";

const CardListSlideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  &:hover {
    .Slide__Button {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const SlideList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 1.5625rem;

  width: calc(61.25rem + 9.375rem);
  height: 14.875rem;

  margin-top: 3.1875rem;

  overflow: auto;
  /* transition: all 0.25s ease-in-out; */

  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox

  &::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }
`;
const SlideItem = styled.li`
  .${(props: CardListSlideType) => props.cardname}Profile__Card__Box {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 12.25rem;
    height: 12.25rem;
  }

  &:first-child {
  }

  &:last-child {
    margin-right: 1.5625rem;
  }

  &:hover {
    .${(props: CardListSlideType) => props.cardname}Profile__Card {
      width: 14.875rem;
      height: 14.875rem;
    }
  }
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

  const [page, setPage] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [pageNation, setPageNation] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [initList, setInitList] = useState(0);

  const slideRef = useRef<HTMLUListElement>(null);

  const onLeftSlide: MouseEventHandler = () => {
    if (!slideRef.current) return;
    if (page <= 0) return;
    setPage(page - 1);
  };

  const onRightSlide: MouseEventHandler = () => {
    if (!slideRef.current) return;
    // if (page >= slideRef.current?.children.length - 1) return;
    setPage(page + 1);
  };

  const styleRender = (idx?: number) => {
    if (!slideRef.current) return;

    if (idx === undefined) return;

    if (idx === 0) {
      return { marginLeft: "1.5625rem" };
    }

    // if (slideRef.current.children.length % (idx + 1) === 0) {
    //   return { marginLeft: "1.5625rem" };
    // }

    //initList === 0

    // if (idx % 10 === 0) {
    //   return { marginLeft: "1.5625rem" };
    // }

    // return {
    //   transform: `translate3d(-${pageWidth}px, 0, 0)`,
    // };
  };

  useEffect(() => {
    setInitList(userNameList.length);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      // setPageWidth(page * slideRef.current?.clientWidth);
      slideRef.current.scrollTo({
        top: 0,
        left: page * slideRef.current?.clientWidth - 25,
        behavior: "smooth",
      });
    }
  }, [page]);

  useEffect(() => {
    // 무한 스크롤 구현, 일단 배열 최대 갯수는 정하지 않았음.
    if (slideRef.current) {
      setPageNation(Math.round(slideRef.current?.children?.length / 5));

      if (page === pageNation - 1) {
        if (page + pageNation === 0) return;
        userNameList.push(...userNameList);
      }
    }
  }, [page, pageNation]);

  return (
    <CardListSlideBox className={cardname + "Card__List__Slide__Box"}>
      <SlideButton
        direction="left"
        onClick={onLeftSlide}
        page={page}
        pageNation={pageNation}
      />
      <SlideList className={cardname + "Slide__List"} ref={slideRef} {...props}>
        {userNameList.map((item: string, idx: number) => {
          return (
            <SlideItem
              key={item + idx}
              className={cardname + "Slide__Item"}
              style={styleRender(idx)}
              {...props}
            >
              <div className={cardname + "Profile__Card__Box"}>
                <ProfileCard
                  key={item + idx}
                  className={cardname + "Profile__Card"}
                  username={item}
                  user_age={userAgeList[idx]}
                  {...props}
                />
              </div>
            </SlideItem>
          );
        })}
        {/* {
          if (page === pageNation)
          return (
            <SlideItem
              key={item + idx}
              className={cardname + "Slide__Item"}
              style={styleRender()}
              {...props}
            >
              <div className={cardname + "Profile__Card__Box"}>
                <ProfileCard
                  key={item + idx}
                  className={cardname + "Profile__Card"}
                  username={item}
                  user_age={userAgeList[idx]}
                  {...props}
                />
              </div>
            </SlideItem>
          );
        } */}
      </SlideList>
      <SlideButton
        direction="right"
        onClick={onRightSlide}
        page={page}
        pageNation={pageNation}
      />
    </CardListSlideBox>
  );
}

/* 
  idx / 5 = 0 1/5 2/5 3/5 4/5 || 5/5  page 1
  idx / 10 = 0 1/10 2/10 3/10 4/10 || 5/10 6/10 7/10 8/10 9/10 || 10/10 page 2
  idx / n 이 page-1 보다 크면 렌더링 

*/
