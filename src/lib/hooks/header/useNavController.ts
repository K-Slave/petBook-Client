import throttle from "lodash.throttle";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export interface NavControllerProps {
  isScrollUse: boolean;
  navView?: boolean;
}

const useNavController = ({ isScrollUse, navView }: NavControllerProps) => {
  const [isNeedNav, setIsNeedNav] = useState(false);
  const [isNavView, setIsNavView] = useState(navView);
  const load = useRef(false);

  const scrollHandler = useCallback(
    throttle(() => {
      if (load.current === true) return;
      if (window.scrollY > 58 && isNeedNav === true) return;
      if (window.scrollY < 58 && isNeedNav === false) return;

      if (window.scrollY > 58 && isNeedNav === false) {
        load.current = true;
        setIsNeedNav(true);
        setIsNavView(false);

        setTimeout(() => {
          if (load.current === true) {
            load.current = false;
          }
        }, 50);

        return;
      }

      if (window.scrollY < 58 && isNeedNav === true) {
        load.current = true;
        setIsNeedNav(false);
        setIsNavView(true);

        setTimeout(() => {
          if (load.current === true) {
            load.current = false;
          }
        }, 50);

        return;
      }
    }, 100),
    [isNeedNav]
  );

  useLayoutEffect(() => {
    if (isScrollUse) {
      window.addEventListener("scroll", scrollHandler);
    }

    return () => {
      if (isScrollUse) {
        load.current = false;
        window.removeEventListener("scroll", scrollHandler);
      }
    };
  }, [isNeedNav, isScrollUse]);

  useLayoutEffect(() => {
    if (!isScrollUse && isNavView) {
      setIsNeedNav(true);
    }

    if (!isScrollUse && !isNavView) {
      setIsNeedNav(false);
    }
  }, [isScrollUse, isNavView]);

  return [isNeedNav];
};

export default useNavController;
