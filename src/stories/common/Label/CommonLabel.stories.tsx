import { Meta, StoryObj } from "@storybook/react";
import CommonLabel from ".";

const meta: Meta<typeof CommonLabel> = {
  title: "common/Label/CommonLabel",
  component: CommonLabel,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

type Story = StoryObj<typeof CommonLabel>;
export const Default: Story = {
  args: {
    children: "이 안에는 input이 들어갑니다.",
  },
  decorators: [(Story, ctx) => <Story>{ctx.args.children}</Story>],
};

export default meta;
