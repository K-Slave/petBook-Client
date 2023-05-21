import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./Menu";
import NextGlobalStyle from "@components/GlobalStyle";

const meta: Meta<typeof Menu> = {
  title: "Header/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },

  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
};

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {},
};

export default meta;
