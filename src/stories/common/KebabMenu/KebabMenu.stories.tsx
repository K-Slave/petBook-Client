import { Meta, StoryObj } from "@storybook/react";
import KebabMenu from ".";
import ListBox from "../ListBox";
import Typography from "../Typography";

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

const itemProps = {
  tag: "button" as const,
  variant: "body-small-medium" as const,
  style: {
    width: "100%",
    padding: "0.5rem 0 0.5rem 1.25rem",
  },
};
export const Default: Story = {
  args: {
    MenuListBox: (
      <ListBox width="7.3125rem">
        <Typography {...itemProps}>수정</Typography>
        <Typography {...itemProps}>삭제</Typography>
      </ListBox>
    ),
  },
};

export const Custom: Story = {
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
