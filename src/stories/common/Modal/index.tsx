import OnClickOutside from "@/stories/common/OnClickOutside";
import { Container, ModalBox, ButtonBox } from "./style";
import { type PropsWithChildren, useLayoutEffect } from "react";
import Button, { type ButtonProps } from "../Button";

type ButtonItem = ButtonProps & {
  text: string;
};

interface Props {
  subTitle?: string;
  title?: string;
  closeModal: () => void;
  defaultModalBox?: boolean;
  modalBoxStyle?: React.CSSProperties;
  buttonBoxStyle?: React.CSSProperties;
  buttons?: [ButtonItem] | [ButtonItem, ButtonItem];
}

const Modal = ({
  subTitle,
  title,
  closeModal,
  children,
  buttons,
  defaultModalBox,
  modalBoxStyle,
  buttonBoxStyle,
}: PropsWithChildren<Props>) => {
  useLayoutEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.removeProperty("overflow");
    };
  }, []);
  return (
    <Container>
      <OnClickOutside trigger={closeModal}>
        <ModalBox modalBox={defaultModalBox} style={modalBoxStyle}>
          {subTitle && <p className="sub-title">{subTitle}</p>}
          {title && <h1>{title}</h1>}
          {children}
          {buttons && (
            <ButtonBox count={buttons.length} style={buttonBoxStyle}>
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
  defaultModalBox: true,
};

export default Modal;
