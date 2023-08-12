import type { Meta, StoryObj } from "@storybook/react";
import NextGlobalStyle from "@styles/Global.style";
import Menu from "./Menu";

const meta: Meta<typeof Menu> = {
  title: "Header/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },

  decorators: [(Story) => <Story />],
};

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {},
};

export default meta;
