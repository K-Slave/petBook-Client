import {
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import drag from "../../../lib/drag";
import throttle from "../../../lib/throttle";
import RestaurantCard from "./RestaurantCard";

export type CardListSlideType = {
  className?: string;
  cardName: string;
  image: string;
  placeNameList: string[];
};

export const CardListSlideBox = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;

  overflow: auto;
  cursor: grab;

  padding-right: 114px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export default function CardListSlide(
  props: PropsWithChildren<CardListSlideType>
) {
  const { cardName, image, placeNameList, children } = props;

  const [isClick, setIsClick] = useState(false);
  const scrollRef = useRef<HTMLUListElement>(null);
  const isClickRef = useRef(false);
  const offsetRef = useRef(0);

  const onDragStart: MouseEventHandler<HTMLUListElement> = useCallback((e) => {
    drag.onDragStart(e, isClickRef, offsetRef);
    setIsClick(true);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grabbing";
    }
  }, []);

  const onDragMove: MouseEventHandler<HTMLUListElement> = useCallback((e) => {
    drag.onDragMove(e, isClickRef, offsetRef, scrollRef);
  }, []);

  const onDragEnd: MouseEventHandler<HTMLUListElement> = useCallback(() => {
    drag.onDragEnd(isClickRef);
    setIsClick(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  }, []);

  const isDragMove = isClick ? throttle(onDragMove, 5) : undefined;

  return (
    <CardListSlideBox
      className={cardName + "Section__List__Slide"}
      {...props}
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseMove={isDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
    >
      {children
        ? children
        : placeNameList.map((item: string) => {
            return (
              <li key={item} className={cardName + "Section__item"}>
                <RestaurantCard
                  key={item}
                  placeName={item}
                  isClick={isClick}
                  {...props}
                />
              </li>
            );
          })}
    </CardListSlideBox>
  );
}
