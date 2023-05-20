import type { Meta, StoryObj } from "@storybook/react";
import TopNav from "./TopNav";

const meta: Meta<typeof TopNav> = {
  title: "Header/TopNav",
  component: TopNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

type Story = StoryObj<typeof TopNav>;

export const Default: Story = {
  args: {},
};

export default meta;
