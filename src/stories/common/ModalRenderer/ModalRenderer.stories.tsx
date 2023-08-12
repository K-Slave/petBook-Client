import { Meta } from "@storybook/react";
import useModal from "@lib/hooks/common/useModal";
import Button from "../Button";
import Modal from "../Modal";
import Typography from "../Typography";
import ModalRenderer from ".";

const meta: Meta<typeof ModalRenderer> = {
  title: "common/Modal/ModalRenderer",
  component: ModalRenderer,
};

const MockModalRenderer = () => {
  const { openModal, closeModal } = useModal();
  const onClick = () => {
    openModal(Modal, {
      children: (
        <Modal.ContentBox>
          <Typography
            tag="p"
            variant="body-default-medium"
            color="var(--black_03)"
            style={{
              marginBottom: "0.25rem",
            }}
          >
            부제목입니다
          </Typography>
          <Typography tag="h1" variant="h3-bold" color="var(--black_01)">
            제목입니다
          </Typography>
          <p
            style={{
              textAlign: "center",
              margin: "1rem 0 2.5rem",
            }}
          >
            아무 컴포넌트나 들어갈 수 있어요.
            <br />
            아래 버튼은 최소 1개에서 최대 2개까지 넣을 수 있어요.
          </p>
          <Modal.ButtonBox buttonNum={1}>
            <Button variant="secondary" onClick={closeModal} height="100%">
              완료
            </Button>
          </Modal.ButtonBox>
        </Modal.ContentBox>
      ),
      closeModal,
    });
  };
  return (
    <>
      <Button variant="primary" onClick={onClick}>
        모달 열기
      </Button>
      <ModalRenderer />
    </>
  );
};

const Template = () => <MockModalRenderer />;
export const Example = Template.bind({});

export default meta;
