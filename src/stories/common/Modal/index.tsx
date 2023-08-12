import { type PropsWithChildren, useLayoutEffect } from "react";
import OnClickOutside from "@/stories/common/OnClickOutside";
import { Container, ModalBox, ButtonBox } from "./style";

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
  maxWidth?: string;
  bgColor?: string;
}
export const ModalContentBox = ({
  children,
  ...props
}: PropsWithChildren<ModalContentBox>) => {
  return <ModalBox {...props}>{children}</ModalBox>;
};
ModalContentBox.defaultProps = {
  maxWidth: "29rem",
  bgColor: "var(--bg_white_02)",
};

interface ModalButtonBoxProps {
  buttonNum: 1 | 2;
  height?: string;
  style?: React.CSSProperties;
}
export const ModalButtonBox = ({
  height,
  buttonNum,
  style,
  children,
}: PropsWithChildren<ModalButtonBoxProps>) => {
  return (
    <ButtonBox count={buttonNum} height={height} style={style}>
      {children}
    </ButtonBox>
  );
};
ModalButtonBox.defaultProps = {
  height: "3.25rem",
};

Modal.ContentBox = ModalContentBox;
Modal.ButtonBox = ModalButtonBox;

export default Modal;
