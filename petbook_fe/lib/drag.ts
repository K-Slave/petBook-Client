import { MouseEvent, MutableRefObject } from "react";

const drag = {
  onDragStart(
    e: MouseEvent,
    isClick: MutableRefObject<boolean>,
    targetOffset: MutableRefObject<number>
  ) {
    isClick.current = true;
    targetOffset.current = e.clientX;
  },

  onDragEnd(isClick: MutableRefObject<boolean>) {
    isClick.current = false;
  },

  onDragMove(
    e: MouseEvent,
    isClick: MutableRefObject<boolean>,
    targetOffset: MutableRefObject<number>,
    scrollRef: MutableRefObject<HTMLUListElement | null>
  ) {
    if (isClick.current && scrollRef.current) {
      const moveX = targetOffset.current - e.clientX;

      scrollRef.current.scrollLeft += moveX;
      targetOffset.current = e.clientX;
    }
  },
};

export default drag;

// export default function CardListSlide(
//   props: PropsWithChildren<CardListSlideType>
// ) {
//   const { cardName, image, placeNameList, children } = props;

//   const [isClick, setIsClick] = useState(false);
//   const scrollRef = useRef<HTMLUListElement>(null);
//   const isClickRef = useRef(false);
//   const offsetRef = useRef(0);

//   const onDragStart: MouseEventHandler<HTMLUListElement> = useCallback((e) => {
//     drag.onDragStart(e, isClickRef, offsetRef);
//     setIsClick(true);
//     if (scrollRef.current) {
//       scrollRef.current.style.cursor = "grabbing";
//     }
//   }, []);

//   const onDragMove: MouseEventHandler<HTMLUListElement> = useCallback((e) => {
//     drag.onDragMove(e, isClickRef, offsetRef, scrollRef);
//   }, []);

//   const onDragEnd: MouseEventHandler<HTMLUListElement> = useCallback(() => {
//     drag.onDragEnd(isClickRef);
//     setIsClick(false);
//     if (scrollRef.current) {
//       scrollRef.current.style.cursor = "grab";
//     }
//   }, []);

//   const isDragMove = isClick ? throttle(onDragMove, 5) : undefined;

//   return (
//     <CardListSlideBox
//       className={cardName + "Section__List__Slide"}
//       {...props}
//       ref={scrollRef}
//       onMouseDown={onDragStart}
//       onMouseMove={isDragMove}
//       onMouseUp={onDragEnd}
//       onMouseLeave={onDragEnd}
//     >
//       {placeNameList.map((item: string) => {
//         return (
//           <li key={item} className={cardName + "Section__item"}>
//             {React.cloneElement(children as React.ReactElement, {
//               item,
//               isClick,
//             })}
//           </li>
//         );
//       })}
//     </CardListSlideBox>
//   );
// }
