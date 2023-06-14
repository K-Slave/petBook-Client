import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "common/Button",
  component: Button,
  tags: ["autodocs"],
};
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "로그인",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "로그인",
  },
};
export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "질문과 답변",
  },
};
export const TertiaryActive: Story = {
  args: {
    variant: "tertiary",
    children: "질문과 답변",
    active: true,
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    bgColor: "var(--secondary)",
    color: "var(--primary)",
    children: "추가하기",
  },
};
export default meta;
