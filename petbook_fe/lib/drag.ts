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
