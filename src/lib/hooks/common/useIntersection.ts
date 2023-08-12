import throttle from "lodash.throttle";
import { useRef } from "react";
import localConsole from "@lib/utils/localConsole";

const useIntersection = ({
  onWork,
  rootMargin,
  isScrollObserver,
}: {
  onWork: any;
  rootMargin: string;
  isScrollObserver?: boolean;
}) => {
  const targetElement = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();
  const add = useRef(false);

  const onAppear = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const asEntry = entry as any;

      if (entry.isIntersecting || asEntry.isVisible) {
        onWork();
      }
    });
  };

  const infiniteScroll = throttle(() => {
    if (targetElement.current) {
      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetHeight = targetElement.current?.offsetTop;
      const paddingBottom = 50;

      if (currentScroll + windowHeight + paddingBottom >= targetHeight) {
        onWork();
      }
    }
  }, 300);

  const setObserver = () => {
    if (!window["IntersectionObserver"]) {
      // 12.1 >= safari

      if (add.current === false && isScrollObserver === true) {
        add.current = true;
        window.addEventListener("scroll", infiniteScroll);
      }
    } else {
      try {
        if (!observer.current) {
          observer.current = new IntersectionObserver(onAppear, {
            rootMargin: rootMargin,
          });
        }

        targetElement.current &&
          observer.current?.observe(targetElement.current);
      } catch (error) {
        localConsole?.log(error);
      }
    }
  };

  const unsetObserver = () => {
    if (!window["IntersectionObserver"]) {
      if (isScrollObserver === true) {
        window.removeEventListener("scroll", infiniteScroll);
      }
    } else {
      try {
        // 12.1 >= safari
        targetElement.current &&
          observer.current?.unobserve(targetElement.current);
      } catch (error) {
        localConsole?.log(error);
      }
    }
  };

  return [targetElement, setObserver, unsetObserver] as [
    typeof targetElement,
    typeof setObserver,
    typeof unsetObserver
  ];
};

export default useIntersection;
