import {
  TouchEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { getEventListeners } from "stream";
import styled from "styled-components";
import localConsole from "../../../lib/localConsole";
import throttle from "../../../lib/throttle";
import RestaurantCard from "./RestaurantCard";

const CardListSlideBox = styled.div`
  .${(props: CardListSlideProps) => props.cardname}Slide__Tofic__List__Box {
    overflow: hidden;
    width: 100vw;
  }

  .${(props: CardListSlideProps) => props.cardname}Slide__Tofic__List {
    display: flex;

    margin-bottom: 4.1667vw;

    overflow-x: auto;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .${(props: CardListSlideProps) =>
      props.cardname}Slide__Tofic__List::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

type SlideToficItemProps = { isViewPage: boolean; cardname: string };

const SlideToficItem = styled.li`
  position: relative;
  padding: 4.1667vw 6.6667vw 4.444vw 0;

  border-bottom: 0.2778vw solid #e5e5e5;

  .${(props: SlideToficItemProps) => props.cardname}Slide__Tofic__Title {
    white-space: nowrap;

    transition: all 0.15s ease-in-out;

    padding-bottom: 3.611vw;

    color: ${(props) => (props.isViewPage ? "#0ac7ce" : "#202020")};

    border-bottom: ${(props) =>
      props.isViewPage ? "0.833vw solid#0ac7ce" : "none"};
  }
`;

/* touch-action: ${(props: CardListSlideProps) =>
    props.isScroll ? "none" : "auto"}; */

const SlideRestCardBox = styled.div`
  display: flex;
  /* gap: 2.7778vw; */

  overflow-x: auto;

  width: 100vw;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  .${(props: CardListSlideProps) => props.cardname}Slide__Card__List {
    display: flex;
    flex-wrap: wrap;
    gap: 2.778vw;

    min-width: calc(91.667vw + 2.778vw);
    width: calc(91.667vw + 2.778vw);

    max-height: 111.111vw;
    height: 111.111vw;
  }

  .${(props) => props.cardname}Slide__Card__List:last-child {
    min-width: calc(91.667vw + (2.778vw) * 2.5);
    width: calc(91.667vw + (2.778vw) * 2.5);
  }

  .${(props) => props.cardname}Slide__Card__Item {
    width: fit-content;
    height: fit-content;
  }
`;

type CardListSlideProps = {
  cardname?: string;
  toficList: string[];
  placeNameList: string[][];
  reviewScoreList: number[];
  imgList: string[];
  isScroll?: boolean;
};

export default function CardListSlide(props: CardListSlideProps) {
  const {
    cardname = "",
    toficList,
    placeNameList,
    reviewScoreList,
    imgList,
  } = props;

  const [toficPage, setToficePage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchMove, setTouchMove] = useState(0);
  const [isTouchMove, setIsTouchMove] = useState(false);
  const [isTouchEnd, setIsTouchEnd] = useState(false);
  // const [isScroll, setIsScroll] = useState(false);
  const [page, setPage] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slideRef.current) return;

    // localConsole.log(touchMove, "touchMove");
    // localConsole.log(isTouchMove, "isTouchMove");

    const childrenLength =
      slideRef.current.scrollWidth / slideRef.current.children.length;

    if (!isTouchEnd && !isTouchMove) {
      localConsole.log(touchMove);

      if (touchMove <= -120) {
        if (page === 0) {
          slideRef.current.scrollTo({
            top: 0,
            left: pageWidth,
            behavior: "smooth",
          });
          return;
        }

        slideRef.current.scrollTo({
          top: 0,
          left: page - 1 * childrenLength,
          behavior: "smooth",
        });

        if (page > 0) {
          setPage(page - 1);
          setPageWidth(page - 1 * childrenLength);
        }

        return;
      }

      //slide right
      if (touchMove >= 120) {
        if (page >= slideRef.current.children.length - 1) {
          slideRef.current.scrollTo({
            top: 0,
            left: pageWidth,
            behavior: "smooth",
          });
          return;
        }

        slideRef.current.scrollTo({
          top: 0,
          left: page + 1 * childrenLength,
          behavior: "smooth",
        });

        if (slideRef.current.children.length > page) {
          setPage(page + 1);
          setPageWidth(page + 1 * childrenLength);
        }

        return;
      }

      if (page === 0) return;
      if (page >= slideRef.current.children.length - 1) return;

      slideRef.current.scrollTo({
        top: 0,
        left: pageWidth,
        behavior: "smooth",
      });
      return;
    }

    setIsTouchEnd(false);

    if (isTouchEnd) {
      slideRef.current.children[page].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      return;
    }
  }, [isTouchEnd, isTouchMove]);

  const onTouchStart: TouchEventHandler = (e) => {
    localConsole.log(e.touches[0], "start");
    setTouchStart(e.touches[0].clientX);
    setTouchMove(0);
    setIsTouchMove(true);
    // setIsScroll(true);
  };

  const onTouchMove: TouchEventHandler = (e) => {
    setTouchMove(touchStart - e.changedTouches[0].clientX);
  };

  const isThrottleTouchMove: any = isTouchMove
    ? throttle(onTouchMove, 25)
    : null;

  const onTouchEnd: TouchEventHandler = () => {
    if (!slideRef.current) return;

    setTimeout(() => {
      setIsTouchMove(false);
    }, 25);

    if (page === 0 && touchMove < 0) return;

    if (page >= slideRef.current.children.length - 1 && touchMove > 0) return;

    setIsTouchEnd(true);
  };

  return (
    <CardListSlideBox className={cardname + "Card__List__Slide"} {...props}>
      <div className={cardname + "Slide__Tofic__List__Box"}>
        <ul className={cardname + "Slide__Tofic__List"}>
          {toficList.map((elem, idx) => {
            return (
              <SlideToficItem
                key={elem + idx}
                className={cardname + "Slide__Tofic__Item"}
                cardname={cardname}
                isViewPage={toficPage === idx ? true : false}
                onClick={() => {
                  setToficePage(idx);
                }}
              >
                <span className={cardname + "Slide__Tofic__Title"}>{elem}</span>
              </SlideToficItem>
            );
          })}
        </ul>
      </div>

      <SlideRestCardBox
        className={cardname + "Slide__Card__List__Box"}
        ref={slideRef}
        onTouchStart={onTouchStart}
        onTouchMove={isThrottleTouchMove}
        onTouchEnd={onTouchEnd}
        // isScroll={isScroll}
        {...props}
      >
        {placeNameList.map((elem, idx) => {
          return (
            <ul
              key={elem[idx] + idx}
              className={cardname + "Slide__Card__List"}
            >
              {elem.map((elem, idx) => {
                return (
                  <li
                    key={elem[idx] + idx}
                    className={cardname + "Slide__Card__Item"}
                  >
                    <RestaurantCard
                      key={elem + idx}
                      cardname={cardname}
                      placename={elem}
                      reviewScore={reviewScoreList[idx]}
                      image={imgList[idx]}
                    />
                  </li>
                );
              })}
            </ul>
          );
        })}
      </SlideRestCardBox>
    </CardListSlideBox>
  );
}
