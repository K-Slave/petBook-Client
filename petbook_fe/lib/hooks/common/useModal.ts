import modalState from "@atoms/pageAtoms/community/modalState";
import { useSetRecoilState } from "recoil";

export default function useModal() {
  const setModalState = useSetRecoilState(modalState);
  const openModal = <T extends object>(
    Component: (props: T) => JSX.Element,
    props: T
  ) => {
    setModalState({
      Component,
      props,
    });
  };
  const closeModal = () => {
    setModalState({
      Component: null,
      props: {},
    });
  };
  return { openModal, closeModal };
}

export const useOpenModal = <T extends object>(
  Component: (props: T) => JSX.Element,
  props: T
) => {
  const setModalState = useSetRecoilState(modalState);
  const openModal = () => {
    setModalState({
      Component,
      props,
    });
  };
  return openModal;
};
