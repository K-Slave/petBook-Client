import { Meta, StoryObj } from "@storybook/react";
import KebabMenu from ".";

const meta: Meta<typeof KebabMenu> = {
  title: "common/KebabMenu",
  component: KebabMenu,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ marginLeft: "5rem" }}>
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof KebabMenu>;
export const Example: Story = {
  args: {
    menuList: [
      {
        name: "수정",
      },
      {
        name: "삭제",
      },
    ],
  },
};

export default meta;
