import Image from "next/image";
import React, { PropsWithChildren } from "react";
import {
  ModalContentsContainer,
  ModalContainer,
  ModalBg,
  ModalItemWrap,
  ModalButton,
} from "./style/ModalStyle";

export type ModalProps = {
  modalState: {
    state: boolean;
    data: {
      content: string;
      title: string;
    };
  };
  handleCloseModal: () => void;
};

export const Modal = ({
  modalState,
  children,
  handleCloseModal,
}: PropsWithChildren<ModalProps>) => {
  const closeModal = () => {
    handleCloseModal();
  };
  return (
    <ModalContainer props={modalState?.state}>
      <ModalItemWrap>
        <Image
          src="/img/common/logo/logo.svg"
          alt="Picture of the author"
          width={147}
          height={26}
        />
        <ModalContentsContainer>{children}</ModalContentsContainer>
        <Modal.ModalActionButton handleCloseModal={handleCloseModal} />
      </ModalItemWrap>
      <ModalBg onClick={closeModal} />
    </ModalContainer>
  );
};

export const ModalActionButton = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  const closeModal = () => {
    handleCloseModal();
  };

  return (
    <ModalButton type="button" className="Primary" onClick={closeModal}>
      확인
    </ModalButton>
  );
};

Modal.ModalActionButton = ModalActionButton;

export default Modal;
