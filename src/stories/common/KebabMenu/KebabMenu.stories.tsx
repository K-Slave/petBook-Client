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
export const DefaultKebabMenu: Story = {
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
export const CustomKebabMenu: Story = {
  args: {
    width: "50px",
    height: "50px",
    color: "red",
    positionLeftStyle: "0",
    MenuListBox: (
      <div
        style={{
          background: "white",
          width: "12rem",
          padding: "1rem",
          borderRadius: "16px",
        }}
      >
        <button>아무 메뉴</button>
      </div>
    ),
  },
};

export default meta;
