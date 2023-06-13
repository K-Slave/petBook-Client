import OnClickOutside from "@/stories/common/OnClickOutside";
import { Container, ModalBox, ButtonBox } from "./Modal.styled";
import { useEffect, type PropsWithChildren } from "react";
import Button, { type ButtonProps } from "../Button";

interface ButtonItem extends ButtonProps {
  text: string;
}

interface Props {
  subTitle?: string;
  title?: string;
  closeModal: () => void;
  modalBox?: boolean;
  buttons?: [ButtonItem] | [ButtonItem, ButtonItem];
}

const Modal = ({
  subTitle,
  title,
  closeModal,
  children,
  buttons,
  modalBox,
}: PropsWithChildren<Props>) => {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);
  return (
    <Container>
      <OnClickOutside trigger={closeModal}>
        <ModalBox modalBox={modalBox}>
          {subTitle && <p className="sub-title">{subTitle}</p>}
          {title && <h1>{title}</h1>}
          {children}
          {buttons && (
            <ButtonBox count={buttons.length}>
              {buttons.map(({ text, ...props }) => (
                <Button {...props} key={text}>
                  {text}
                </Button>
              ))}
            </ButtonBox>
          )}
        </ModalBox>
      </OnClickOutside>
    </Container>
  );
};

Modal.defaultProps = {
  modalBox: true,
};

export default Modal;
