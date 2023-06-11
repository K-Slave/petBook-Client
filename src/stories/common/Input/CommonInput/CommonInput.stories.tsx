import { Meta, StoryObj } from "@storybook/react";
import CommonInput from "./CommonInput";

const meta: Meta<typeof CommonInput> = {
  title: "common/Input/CommonInput",
  component: CommonInput,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

type Story = StoryObj<typeof CommonInput>;
export const Default: Story = {};

export default meta;
