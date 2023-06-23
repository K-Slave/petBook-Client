import { Meta, StoryObj } from "@storybook/react";
import Pagination from ".";
import Typography from "../Typography";
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
    PageButton: ({ active, page, ...props }) => (
      <Button {...props} width="6rem" height="fit-content">
        <Typography
          tag="span"
          variant={active ? "body-default-bold" : "body-default-medium"}
          color={active ? "red" : "var(--black_05)"}
        >
          {page} page
        </Typography>
      </Button>
    ),
    PrevButton: ({ disabled, ...props }) => (
      <Button
        {...props}
        disabled={disabled}
        width="2rem"
        height="fit-content"
        style={{
          color: disabled ? "var(--black_05)" : "black",
        }}
      >
        <Typography
          variant={disabled ? "body-small-medium" : "body-small-bold"}
          tag="span"
        >
          이전
        </Typography>
      </Button>
    ),
    NextButton: (props) => (
      <Button {...props} width="2rem" height="fit-content">
        <Typography variant="body-small-bold" tag="span">
          다음
        </Typography>
      </Button>
    ),
  },
};

export default meta;
