import type { Meta, StoryObj } from "@storybook/react";
import { HeaderExample } from "./HeaderExample";

const meta: Meta<typeof HeaderExample> = {
  title: "Example/Header",
  component: HeaderExample,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HeaderExample>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {};
