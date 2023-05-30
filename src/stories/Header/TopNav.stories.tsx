import type { Meta, StoryObj } from "@storybook/react";
import TopNav from "./TopNav";

const meta: Meta<typeof TopNav> = {
  title: "Header/TopNav",
  component: TopNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isScrollUse: false,
    navView: false,
    isDevelopment: true,
  },
  decorators: [(Story, ctx) => <Story {...ctx.args} />],
};

type Story = StoryObj<typeof TopNav>;

export const Default: Story = {
  args: {
    isScrollUse: false,
    navView: false,
    isDevelopment: true,
  },
};

export default meta;
