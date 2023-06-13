import { Meta } from "@storybook/react";
import ModalRenderer from "./ModalRenderer";
import useModal from "@lib/hooks/common/useModal";
import Modal from ".";
import Button from "../Button";

const meta: Meta<typeof ModalRenderer> = {
  title: "common/ModalRenderer",
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
      <p
        style={{
          marginTop: "2rem",
          textAlign: "center",
        }}
      >
        모달 컴포넌트를 렌더링하는 함수로, NextApp 컴포넌트에서 딱 한번
        사용됩니다.
        <br />
        useModal 공용 훅을 사용하여 모달을 열고 닫을 수 있습니다. 구체적인 사용
        방법은 코드를 참고해주세요!
      </p>
      <ModalRenderer />
    </>
  );
};

const Template = () => <MockModalRenderer />;
export const Example = Template.bind({});

export default meta;
