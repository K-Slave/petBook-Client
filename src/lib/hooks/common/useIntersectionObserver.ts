import throttle from "lodash.throttle";
import { useRef } from "react";
import localConsole from "@lib/utils/localConsole";

export default function useIntersectionObserver({
  onAppearCallback,
  onDisappearCallback,
  $RootDom,
  rootMargin,
  isScrollObserver,
}: {
  onAppearCallback?: () => void;
  onDisappearCallback?: () => void;
  $RootDom?: HTMLDivElement | null;
  rootMargin: string | number;
  isScrollObserver?: boolean;
}) {
  const targetElement = useRef<HTMLDivElement>(null);
  const appearObserver = useRef<IntersectionObserver>();
  const disAppearObserver = useRef<IntersectionObserver>();
  const isSet = useRef<boolean>(false);

  const onAppear = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && onAppearCallback) {
        onAppearCallback();
      }

      localConsole?.log("onAppear");
      localConsole?.log(entries[0].intersectionRatio, "ap");
    });
  };

  const onDisappear = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: any) => {
      if (!entry.isVisible && onDisappearCallback) {
        onDisappearCallback();
      }

      localConsole?.log("onDisappear");
      localConsole?.log(entries[0].intersectionRatio, "di");

      // if (entry.isIntersecting) {
      //   onAppearCallback();
      // }
      // if (entry.isVisible) {
      //   onAppearCallback();
      // }
    });
  };

  const infiniteScroll = throttle(() => {
    try {
      const currentScroll = $RootDom?.scrollTop;
      const scrollHeight = $RootDom?.scrollHeight;
      const clientHeight = targetElement.current?.clientHeight;
      const paddingBottom = typeof rootMargin === "number" ? rootMargin : 50;

      if (currentScroll && scrollHeight && clientHeight && onAppearCallback) {
        if (
          currentScroll + window.innerHeight + paddingBottom >=
          scrollHeight
        ) {
          onAppearCallback();
        }
      }
    } catch (e) {
      localConsole?.log(e);
    }
  }, 300);

  const setObserver = ($RootDomCurrent?: HTMLDivElement | null) => {
    localConsole?.log($RootDomCurrent);
    localConsole?.log(targetElement.current);

    if (!window.IntersectionObserver) {
      if (isSet.current === false && isScrollObserver === true) {
        isSet.current = true;

        if (!$RootDomCurrent) {
          document.body.addEventListener("scroll", infiniteScroll);

          return;
        }
        $RootDomCurrent.addEventListener("scroll", infiniteScroll);
      }

      // TODO: 스크롤 이벤트 핸들링시 disappear 동작 구현해야함
      // if (!isScrollObserver && onDisappearCallback) {
      //   onDisappearCallback();
      // }
    } else {
      try {
        if (onAppearCallback && !appearObserver.current) {
          appearObserver.current = new IntersectionObserver(onAppear, {
            root: $RootDomCurrent || document.body,
            rootMargin:
              typeof rootMargin === "number"
                ? rootMargin.toString() + "px"
                : rootMargin,
          });
        }

        if (onDisappearCallback && !disAppearObserver.current) {
          disAppearObserver.current = new IntersectionObserver(onDisappear, {
            root: $RootDomCurrent || document.body,
            rootMargin:
              typeof rootMargin === "number"
                ? rootMargin.toString() + "px"
                : rootMargin,
          });
        }

        if (targetElement.current) {
          appearObserver.current?.observe(targetElement.current);
          disAppearObserver.current?.observe(targetElement.current);
        }
      } catch (e) {
        localConsole?.log(e);
      }
    }
  };

  const unsetObserver = () => {
    if (isScrollObserver === true) {
      if (!$RootDom) return;

      $RootDom.removeEventListener("scroll", infiniteScroll);
    }

    if (!window.IntersectionObserver) {
      if (isScrollObserver === true) {
        if (!$RootDom) {
          document.body.removeEventListener("scroll", infiniteScroll);

          return;
        }

        $RootDom.removeEventListener("scroll", infiniteScroll);
      }
    } else {
      try {
        // 12.1 >= safari

        if (targetElement.current) {
          appearObserver.current?.unobserve(targetElement.current);
          disAppearObserver.current?.unobserve(targetElement.current);
        }
      } catch (e) {
        localConsole?.log(e);
      }
    }
  };

  return [targetElement, setObserver, unsetObserver] as [
    typeof targetElement,
    typeof setObserver,
    typeof unsetObserver
  ];
}
