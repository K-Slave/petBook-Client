import localConsole from "@lib/utils/localConsole";
import React, {
  MouseEventHandler,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const usePWShowHide = () => {
  const [isPWHide, setPWHide] = useState(true);

  const onClickPW: MouseEventHandler = () => {
    setPWHide(!isPWHide);
  };

  // useLayoutEffect(() => {
  //   localConsole?.log(passwordRef.current, 'passwordRef.current');
  //   if (passwordRef.current) {
  //     passwordRef.current.focus({ preventScroll: true });
  //   }
  // }, [isPWHide, passwordRef]);

  return { isPWHide, onClickPW };
};

export default usePWShowHide;
