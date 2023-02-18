import OnClickOutside from "@components/common/OnClickOutside";
import { Container, ModalBox, ButtonBox } from "./styled";

interface Props {
  subTitle?: string;
  modalTitle: string;
  modalContent?: React.ReactNode;
  closeModal: () => void;
  clickCancelButton: () => void;
  clickConfirmButton: () => void;
}

const CommunityModal = ({
  subTitle,
  modalTitle,
  modalContent,
  closeModal,
  clickCancelButton,
  clickConfirmButton,
}: Props) => {
  return (
    <Container>
      <OnClickOutside trigger={closeModal}>
        <ModalBox>
          {subTitle && <p>{subTitle}</p>}
          <h1>{modalTitle}</h1>
          {modalContent}
          <ButtonBox>
            <button type="button" onClick={clickCancelButton}>
              취소
            </button>
            <button type="button" onClick={clickConfirmButton}>
              삭제하기
            </button>
          </ButtonBox>
        </ModalBox>
      </OnClickOutside>
    </Container>
  );
};

CommunityModal.defaultProps = {
  subTitle: "",
  modalContent: null,
};

export default CommunityModal;
