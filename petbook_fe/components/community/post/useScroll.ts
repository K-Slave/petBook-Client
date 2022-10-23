import { useEffect } from "react";

const useScroll = (to: { top?: number; left?: number }, deps: any[]) => {
  useEffect(() => {
    window.scrollTo({
      ...to,
      behavior: "smooth",
    });
  }, deps);
};

export default useScroll;
