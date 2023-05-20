import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./Menu";

const meta: Meta<typeof Menu> = {
  title: "Header/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {},
};

export default meta;
