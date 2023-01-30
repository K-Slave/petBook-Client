import throttle from "lodash.throttle";
import { useCallback, useEffect, useState } from "react";

const useNavController = () => {
  const [isNeedNav, setIsNeedNav] = useState(false);

  const scrollHandler = useCallback(
    throttle(() => {
      if (window.scrollY > 58) {
        setIsNeedNav(true);

        return;
      }

      if (window.scrollY < 58) {
        setIsNeedNav(false);

        return;
      }
    }, 100),
    [isNeedNav]
  );

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return { isNeedNav };
};

export default useNavController;
