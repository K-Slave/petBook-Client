import { Meta, StoryObj } from "@storybook/react";
import Pagination from ".";

const meta: Meta<typeof Pagination> = {
  title: "common/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Pagination>;
export const Example: Story = {
  args: {
    totalPages: 10,
    buttonNum: 5,
  },
};

export default meta;
