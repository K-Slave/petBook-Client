import { Meta, StoryObj } from "@storybook/react";
import DropdownMenu from ".";

const meta: Meta<typeof DropdownMenu> = {
  title: "common/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ marginLeft: "5rem" }}>
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof DropdownMenu>;
export const Example: Story = {
  args: {
    menuList: [
      {
        name: "수정",
        onClick: () => {},
      },
      {
        name: "삭제",
        onClick: () => {},
      },
    ],
  },
};

export default meta;
