import { useRecoilValue } from "recoil";
import modalState from "@atoms/common/modalState";

const ModalRenderer = () => {
  const { Component, props } = useRecoilValue(modalState);
  return Component ? <Component {...props} /> : null;
};

export default ModalRenderer;
