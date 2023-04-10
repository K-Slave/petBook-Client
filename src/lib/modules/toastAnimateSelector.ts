import { ToastAnimate } from "@components/common/ToastMessage/ToastMessage";
import localConsole from "@lib/utils/localConsole";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

const fadeTime = 400;

interface MountProps {
  animateValue: ToastAnimate;
}

export const mountAnimateSelector = ({ animateValue }: MountProps) => {
  const $Toast = document.querySelector<HTMLDivElement>(".ToastMessage");

  if ($Toast) {
    switch (animateValue) {
      case "fade_in_out": {
        $Toast.style.opacity = "0";
        $Toast.style.animation = `${fadeTime}ms ease-in 0s fadeIn`;
        $Toast.style.opacity = "1";

        break;
      }

      default: {
        $Toast.style.opacity = "0";
        $Toast.style.animation = `${fadeTime}ms ease-in 0s fadeIn`;
        $Toast.style.opacity = "1";

        break;
      }
    }
  }
};

interface UnmountProps {
  setIsToastView: Dispatch<SetStateAction<boolean>>;
  isWorkDone: MutableRefObject<boolean>;
  animateValue: ToastAnimate;
}

export const unmountAnimateSelector = ({
  setIsToastView,
  isWorkDone,
  animateValue,
}: UnmountProps) => {
  const $Toast = document.querySelector<HTMLDivElement>(".ToastMessage");

  if ($Toast) {
    switch (animateValue) {
      case "fade_in_out": {
        $Toast.style.animation = `${fadeTime}ms ease-in 0s fadeOut`;
        isWorkDone.current = false;

        setTimeout(() => {
          setIsToastView(false);
          $Toast.style.removeProperty("animation");
          $Toast.style.removeProperty("opacity");
          isWorkDone.current = true;
        }, fadeTime);
        break;
      }

      default: {
        $Toast.style.animation = `${fadeTime}ms ease-in 0s fadeOut`;
        isWorkDone.current = false;

        setTimeout(() => {
          setIsToastView(false);
          $Toast.style.removeProperty("animation");
          $Toast.style.removeProperty("opacity");
          isWorkDone.current = true;
        }, fadeTime);
        break;
      }
    }
  }
};
