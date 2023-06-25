import { Meta, StoryObj } from "@storybook/react";
import HelperText from "./HelperText";

const meta: Meta<typeof HelperText> = {
  title: "common/Form/HelperText",
  component: HelperText,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    status: "error",
    message: {
      error: "이메일 형식이 올바르지 않습니다.",
    },
  },
};

type Story = StoryObj<typeof HelperText>;
export const Default: Story = {};

export default meta;
