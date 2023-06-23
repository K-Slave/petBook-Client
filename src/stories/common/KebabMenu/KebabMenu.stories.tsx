import { Meta, StoryObj } from "@storybook/react";
import KebabMenu from ".";
import MenuListBox from "../MenuListBox";

const meta: Meta<typeof KebabMenu> = {
  title: "common/KebabMenu",
  component: KebabMenu,
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
    MenuListBox: (
      <MenuListBox>
        <MenuListBox.DefaultItem>수정</MenuListBox.DefaultItem>
        <MenuListBox.DefaultItem>삭제</MenuListBox.DefaultItem>
      </MenuListBox>
    ),
  },
};

export const CustomKebabMenu: Story = {
  args: {
    width: "50px",
    height: "50px",
    color: "red",
    boxPosition: { left: "0" },
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
