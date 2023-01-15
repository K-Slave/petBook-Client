import { ToastAnimate } from "@components/common/ToastMessage/ToastMessage";
import {
  mountAnimateSelector,
  unmountAnimateSelector,
} from "@lib/modules/toastAnimateSelector";
import localConsole from "@lib/utils/localConsole";
import { useRef, useState } from "react";
import useDidMountEffect from "./useDidMountEffect";

const defaultTimeout = 5000;

export type ToastHandlerType =
  | boolean
  | ((value: React.SetStateAction<boolean>) => boolean);

interface ToastMessageOptionsProps {
  timeout?: number;
  animation?: ToastAnimate;
}

const useToastMessage = (options?: ToastMessageOptionsProps) => {
  const [push, setPush] = useState(false);
  const [isToastView, setIsToastView] = useState(false);
  const timer = useRef<any>(null); // NodeJS.Timeout
  const isWorkDone = useRef(isToastView === push);
  // TODO : 상태값으로 변경 시켜야 할듯. 여러번 클릭 이슈

  const isOptionExist = typeof options !== "undefined";

  const timeoutValue =
    options && typeof options.timeout !== "undefined" ? options.timeout : 0;

  const timeoutResult = isOptionExist ? timeoutValue : defaultTimeout;

  const animateValue =
    options && typeof options.animation !== "undefined"
      ? options.animation
      : "fade_in_out";

  const toastLifeCycle = () => {
    if (push === true && isWorkDone.current === true) {
      setIsToastView(true);
      mountAnimateSelector({
        // setIsToastView,
        // isWorkDone,
        animateValue,
        // timeoutResult,
      });

      timer.current = setTimeout(() => {
        setPush(false);
      }, timeoutResult);
    } else if (push === false) {
      clearTimeout(timer.current);
      unmountAnimateSelector({ setIsToastView, isWorkDone, animateValue });
    }
  };

  useDidMountEffect(toastLifeCycle, [push]);

  const toastHandler = (callback: ToastHandlerType) => {
    localConsole?.log(push, "push");
    localConsole?.log(isToastView, "isToastView");
    localConsole?.log(isWorkDone.current, "isWorkDone.current");

    if (isWorkDone.current === true) {
      setPush(callback);
    }
  };

  return [isToastView, toastHandler] as [
    typeof isToastView,
    typeof toastHandler
  ];
};

export default useToastMessage;
