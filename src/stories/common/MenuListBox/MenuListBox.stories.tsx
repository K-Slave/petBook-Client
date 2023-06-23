import { Meta, StoryObj } from "@storybook/react";
import MenuListBox from ".";
import FaceHappy from "@/stories/Icon/FaceHappy";
import Clock from "@/stories/Icon/Clock";

const meta: Meta<typeof MenuListBox> = {
  title: "common/MenuListBox",
  component: MenuListBox,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

type Story = StoryObj<typeof MenuListBox>;
export const Default: Story = {
  args: {
    children: (
      <>
        <MenuListBox.DefaultItem>메뉴1</MenuListBox.DefaultItem>
        <MenuListBox.DefaultItem>메뉴2</MenuListBox.DefaultItem>
      </>
    ),
  },
};

export const Custom: Story = {
  args: {
    children: (
      <>
        <MenuListBox.DefaultItem
          style={{
            gap: "0.5rem",
          }}
        >
          <FaceHappy width="20" height="20" />
          메뉴1
        </MenuListBox.DefaultItem>
        <MenuListBox.DefaultItem
          style={{
            gap: "0.5rem",
          }}
        >
          <Clock width="20" height="20" />
          메뉴2
        </MenuListBox.DefaultItem>
      </>
    ),
    width: "15rem",
    style: {
      background: "red",
      color: "white",
    },
  },
};
export default meta;
