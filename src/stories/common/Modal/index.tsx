import OnClickOutside from "@/stories/common/OnClickOutside";
import { Container, ModalBox, ButtonBox } from "./style";
import { type PropsWithChildren, useLayoutEffect } from "react";

interface Props {
  closeModal: () => void;
}

const Modal = ({ closeModal, children }: PropsWithChildren<Props>) => {
  useLayoutEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.removeProperty("overflow");
    };
  }, []);
  return (
    <Container>
      <OnClickOutside trigger={closeModal}>
        <div>{children}</div>
      </OnClickOutside>
    </Container>
  );
};

interface ModalContentBox {
  style?: React.CSSProperties;
}

export const ModalContentBox = ({
  style,
  children,
}: PropsWithChildren<ModalContentBox>) => {
  return <ModalBox style={style}>{children}</ModalBox>;
};

interface ModalButtonBoxProps {
  buttonNum: 1 | 2;
  style?: React.CSSProperties;
}

export const ModalButtonBox = ({
  buttonNum,
  style,
  children,
}: PropsWithChildren<ModalButtonBoxProps>) => {
  return (
    <ButtonBox count={buttonNum} style={style}>
      {children}
    </ButtonBox>
  );
};
Modal.DefaultContentBox = ModalContentBox;
Modal.DefaultButtonBox = ModalButtonBox;

export default Modal;
