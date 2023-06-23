import { Meta, StoryObj } from "@storybook/react";
import Pagination from ".";

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
    PageButton: ({ onClick, active, page }) => (
      <button
        onClick={onClick}
        style={{
          color: active ? "red" : "black",
          padding: "1rem",
        }}
      >
        {page} page
      </button>
    ),
  },
};

export default meta;
