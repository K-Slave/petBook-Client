import { useEffect } from "react";

export default function useScroll(
  to: { top?: number; left?: number },
  deps: any[]
) {
  useEffect(() => {
    window.scrollTo({
      ...to,
      behavior: "smooth",
    });
  }, deps);
}
