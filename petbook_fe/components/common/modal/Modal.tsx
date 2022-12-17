import Image from "next/image";
import {
  ModalContentsContainer,
  ModalContainer,
  ModalBg,
  ModalItemWrap,
  ModalButton,
} from "./style/modalStyle";

export const ModalContents = () => {
  return (
    <ModalContentsContainer>
      <hgroup>
        <h4>로그인 후 다양한 콘텐츠를 즐겨보세요</h4>
      </hgroup>
      <section>
        <article>모달 요소</article>
      </section>
    </ModalContentsContainer>
  );
};

export const ModalActionButton = () => {
  return (
    <ModalButton type="button" className="Primary">
      모달 버튼
    </ModalButton>
  );
};

type ModalProps = {
  state: boolean;
  handleCloseModal: () => void;
};

export const Modal = ({ state, handleCloseModal }: ModalProps) => {
  const closeModal = () => {
    handleCloseModal();
  };
  return (
    <ModalContainer props={state}>
      <ModalItemWrap>
        <Image
          src="/img/common/logo/logo.svg"
          alt="Picture of the author"
          width={147}
          height={26}
        />
        <Modal.ModalContents />
        <Modal.ModalActionButton />
      </ModalItemWrap>
      <ModalBg onClick={closeModal} />
    </ModalContainer>
  );
};

Modal.ModalContents = ModalContents;
Modal.ModalActionButton = ModalActionButton;

export default Modal;
