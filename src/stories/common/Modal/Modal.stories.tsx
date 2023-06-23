import { Meta, StoryObj } from "@storybook/react";
import Modal from ".";
import Typography from "../Typography";
import Button from "../Button";

const meta: Meta<typeof Modal> = {
  title: "common/Modal/Modal",
  component: Modal,
};

type Story = StoryObj<typeof Modal>;

export const ModalExample: Story = {
  args: {
    children: (
      <Modal.DefaultContentBox>
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
        <Modal.DefaultButtonBox buttonNum={1}>
          <Button variant="secondary">완료</Button>
        </Modal.DefaultButtonBox>
      </Modal.DefaultContentBox>
    ),
    closeModal: () => {},
  },
};

export const PostDeleteModal: Story = {
  args: {
    children: (
      <Modal.DefaultContentBox>
        <Typography
          tag="p"
          variant="body-default-medium"
          color="var(--black_03)"
          style={{
            marginBottom: "0.25rem",
          }}
        >
          글제목이 들어갑니다
        </Typography>
        <Typography
          tag="h1"
          variant="h3-bold"
          color="var(--black_01)"
          style={{
            marginBottom: "2.5rem",
          }}
        >
          정말 이 글을 삭제하시겠습니까?
        </Typography>
        <Modal.DefaultButtonBox buttonNum={2}>
          <Button variant="secondary">취소</Button>
          <Button variant="primary">삭제하기</Button>
        </Modal.DefaultButtonBox>
      </Modal.DefaultContentBox>
    ),
    closeModal: () => {},
  },
};

export const CommentDeleteModal: Story = {
  args: {
    closeModal: () => {},
    children: (
      <Modal.DefaultContentBox>
        <Typography
          tag="h1"
          variant="h3-bold"
          color="var(--black_01)"
          style={{
            marginBottom: "2.5rem",
          }}
        >
          정말 이 댓글을 삭제하시겠습니까?
        </Typography>
        <Modal.DefaultButtonBox buttonNum={2}>
          <Button variant="secondary">취소</Button>
          <Button variant="primary">삭제하기</Button>
        </Modal.DefaultButtonBox>
      </Modal.DefaultContentBox>
    ),
  },
};

export const CustomModalWithoutDefaultBox: Story = {
  args: {
    children: (
      <div
        style={{
          background: "white",
          padding: "1rem",
        }}
      >
        <p>기본 모달 박스 없이 커스텀이 가능합니다!</p>
      </div>
    ),
  },
};

export default meta;
