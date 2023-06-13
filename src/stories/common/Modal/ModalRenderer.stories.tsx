import { Meta } from "@storybook/react";
import ModalRenderer from "./ModalRenderer";
import useModal from "@lib/hooks/common/useModal";
import Modal from ".";
import Button from "../Button";

const meta: Meta<typeof ModalRenderer> = {
  title: "common/Modal/ModalRenderer",
  component: ModalRenderer,
};

const MockModalRenderer = () => {
  const { openModal, closeModal } = useModal();
  const onClick = () => {
    openModal(Modal, {
      subTitle: "부제목",
      title: "제목이 들어갑니다.",
      children: (
        <p
          style={{
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          아무 컴포넌트나 들어갈 수 있어요.
          <br />
          아래 버튼은 최소 1개에서 최대 2개까지 넣을 수 있어요.
        </p>
      ),
      closeModal,
      buttons: [
        {
          text: "완료",
          onClick: closeModal,
          variant: "secondary",
        },
      ],
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
