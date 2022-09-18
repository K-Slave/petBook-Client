import { useSetRecoilState } from "recoil";
import { sliderModalState } from "../../../../atoms/componentAtoms/community/sliderModal";

export const useSlider = (length: number) => {
  const setSliderModalState = useSetRecoilState(sliderModalState);
  const movePrev = () => {
    setSliderModalState((state) => {
      const current = (state.currentIndex - 1 + length) % length;
      return {
        ...state,
        currentIndex: current,
        prevIndex: current === 0 ? length - 1 : current - 1,
      };
    });
  };

  const moveNext = () => {
    setSliderModalState((state) => {
      const current = (state.currentIndex + 1) % length;
      return {
        ...state,
        currentIndex: current,
        prevIndex: current === 0 ? length - 1 : current - 1,
      };
    });
  };
  const changeCurrentIndex = (currentIndex: number) => {
    setSliderModalState((state) => ({
      ...state,
      currentIndex,
      prevIndex: currentIndex === 0 ? length - 1 : currentIndex - 1,
    }));
  };
  const closeModal = () => {
    setSliderModalState((state) => ({
      ...state,
      show: false,
    }));
  };
  return { moveNext, movePrev, changeCurrentIndex, closeModal };
};
