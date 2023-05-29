import type { Meta, StoryObj } from "@storybook/react";
import TopNav from "./TopNav";
import NextGlobalStyle from "@components/GlobalStyle";

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
  },
  decorators: [(Story, ctx) => <Story {...ctx.args} />],
};

type Story = StoryObj<typeof TopNav>;

export const Default: Story = {
  args: {
    isScrollUse: false,
    navView: false,
  },
};

export default meta;
