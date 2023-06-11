import { Meta, StoryObj } from "@storybook/react";
import WebRTCEx from "./WebRTCEx";

const meta: Meta<typeof WebRTCEx> = {
  title: "Example/WebRTCEx",
  component: WebRTCEx,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

type Story = StoryObj<typeof WebRTCEx>;
export const Default: Story = {};

export default meta;
