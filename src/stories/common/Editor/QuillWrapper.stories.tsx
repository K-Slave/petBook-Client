import { Meta, StoryObj } from "@storybook/react";
import QuillWrapper from "./QuillWrapper";

const meta: Meta<typeof QuillWrapper> = {
  title: "common/Editor/QuillWrapper",
  component: QuillWrapper,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof QuillWrapper>;
export const Default: Story = {};

export default meta;
