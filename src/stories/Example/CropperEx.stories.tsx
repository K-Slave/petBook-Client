import { Meta, StoryObj } from "@storybook/react";
import CropperEx from "./CropperEx";

const meta: Meta<typeof CropperEx> = {
  title: "Example/CropperEx",
  component: CropperEx,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

type Story = StoryObj<typeof CropperEx>;
export const Default: Story = {};

export default meta;
