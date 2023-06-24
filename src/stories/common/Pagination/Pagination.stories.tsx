import { Meta, StoryObj } from "@storybook/react";
import Pagination from ".";
import Button from "../Button";

const meta: Meta<typeof Pagination> = {
  title: "common/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Pagination>;
export const Default: Story = {
  args: {
    totalPages: 10,
    buttonCntPerLine: 5,
  },
};

export const Custom: Story = {
  args: {
    totalPages: 10,
    buttonCntPerLine: 5,
    PageButton: ({ active, page, onClick }) => (
      <Button
        onClick={onClick}
        width="6rem"
        height="fit-content"
        color={active ? "red" : "var(--black_05)"}
        typography={active ? "body-default-bold" : "body-default-medium"}
      >
        {page} page
      </Button>
    ),
    PrevButton: ({ disabled, onClick }) => (
      <Button
        onClick={onClick}
        disabled={disabled}
        width="2rem"
        height="fit-content"
        typography={disabled ? "body-small-medium" : "body-small-bold"}
        style={{
          color: disabled ? "var(--black_05)" : "black",
        }}
      >
        이전
      </Button>
    ),
    NextButton: ({ disabled, onClick }) => (
      <Button
        onClick={onClick}
        disabled={disabled}
        width="2rem"
        height="fit-content"
        typography={disabled ? "body-small-medium" : "body-small-bold"}
        style={{
          color: disabled ? "var(--black_05)" : "black",
        }}
      >
        다음
      </Button>
    ),
  },
};

export default meta;
