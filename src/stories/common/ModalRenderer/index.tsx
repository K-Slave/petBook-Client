import modalState from "@atoms/common/modalState";
import { useRecoilValue } from "recoil";

const ModalRenderer = () => {
  const { Component, props } = useRecoilValue(modalState);
  return Component ? <Component {...props} /> : null;
};

export default ModalRenderer;
