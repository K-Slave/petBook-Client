import { MutableRefObject } from "react";

export const useSlide = (root: MutableRefObject<Element | null>) => {
  const onRightSlide = () => {
    if (!root.current) return;
    const position = root.current.scrollLeft;
    const remain = root.current.scrollWidth - position;
    const width = root.current.clientWidth;
    root.current.scrollTo({
      top: 0,
      left: remain > width ? position + width : position + remain,
      behavior: "smooth",
    });
  };
  const onLeftSlide = () => {
    if (!root.current) return;
    const position = root.current.scrollLeft;
    const width = root.current.clientWidth;
    root.current.scrollTo({
      top: 0,
      left: position > width ? position - width : 0,
      behavior: "smooth",
    });
  };
  return { onLeftSlide, onRightSlide };
};
