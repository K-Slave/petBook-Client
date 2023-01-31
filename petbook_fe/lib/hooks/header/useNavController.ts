import throttle from "lodash.throttle";
import { useCallback, useEffect, useRef, useState } from "react";

const useNavController = () => {
  const [isNeedNav, setIsNeedNav] = useState(false);
  const load = useRef(false);

  const scrollHandler = useCallback(
    throttle(() => {
      if (load.current === true) return;
      if (window.scrollY > 58 && isNeedNav === true) return;
      if (window.scrollY < 58 && isNeedNav === false) return;

      if (window.scrollY > 58 && isNeedNav === false) {
        load.current = true;
        setIsNeedNav(true);

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

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      load.current = false;
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isNeedNav]);

  return [isNeedNav] as [typeof isNeedNav];
};

export default useNavController;
