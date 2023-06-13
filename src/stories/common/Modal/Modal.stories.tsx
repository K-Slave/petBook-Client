import { Meta, StoryObj } from "@storybook/react";
import _Modal from ".";
const meta: Meta<typeof _Modal> = {
  title: "common/Modal/Modal",
  component: _Modal,
};

type Story = StoryObj<typeof _Modal>;

export const ModalExample: Story = {
  args: {
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
    closeModal: () => {},
    buttons: [
      {
        text: "완료",
        onClick: () => {},
        variant: "secondary",
      },
    ],
  },
};

export const PostDeleteModal: Story = {
  args: {
    subTitle: "커뮤니티 게시물 제목",
    title: "정말 이 글을 삭제하시겠습니까?",
    closeModal: () => {},
    buttons: [
      {
        text: "취소",
        onClick: () => {},
        variant: "secondary",
      },
      {
        text: "삭제하기",
        onClick: () => {},
        variant: "primary",
      },
    ],
  },
};

export const CommentDeleteModal: Story = {
  args: {
    title: "정말 이 댓글을 삭제하시겠습니까?",
    closeModal: () => {},
    buttons: [
      {
        text: "취소",
        onClick: () => {},
        variant: "secondary",
      },
      {
        text: "삭제하기",
        onClick: () => {},
        variant: "primary",
      },
    ],
  },
};

export default meta;
