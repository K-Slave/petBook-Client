import { MutableRefObject } from "react";

export const useSlide = (root: MutableRefObject<Element | null>) => {
  const onRightSlide = () => {
    if (!root.current) return;
    const remain = root.current.scrollWidth - root.current.scrollLeft;
    const width = root.current.clientWidth;
    root.current.scrollTo({
      top: 0,
      left: remain > width ? width : remain,
      behavior: "smooth",
    });
  };
  const onLeftSlide = () => {
    if (!root.current) return;
    const remain = root.current.scrollLeft;
    const width = root.current.clientWidth;
    root.current.scrollTo({
      top: 0,
      left: remain > width ? -width : -remain,
      behavior: "smooth",
    });
  };
  return { onLeftSlide, onRightSlide };
};
