import modalState from "@atoms/common/modalState";
import { useRecoilValue } from "recoil";

const Modal = () => {
  const { Component, props } = useRecoilValue(modalState);
  return Component ? <Component {...props} /> : null;
};

export default Modal;
