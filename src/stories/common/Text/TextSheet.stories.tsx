import { Meta, StoryObj } from "@storybook/react";
import TextSheet from "./TextSheet";

const meta: Meta<typeof TextSheet> = {
  title: "common/Text/TextSheet",
  component: TextSheet,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

type Story = StoryObj<typeof TextSheet>;
export const Default: Story = {};

export default meta;
