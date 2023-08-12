import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CommonCheckBox from "./CommonCheckBox";

const meta: Meta<typeof CommonCheckBox> = {
  title: "common/Input/CommonCheckBox",
  component: CommonCheckBox,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {},
};

type Story = StoryObj<typeof CommonCheckBox>;
export const Default: Story = {
  args: {
    text: "기본 스타일 체크박스",
    checkBoxWidth: "1rem",
    checkBoxHeight: "1rem",
  },
  decorators: [
    (Story, ctx) => {
      const [check, setCheck] = useState<boolean>(false);
      return (
        <Story
          {...ctx.args}
          check={check}
          onClick={() => {
            setCheck((prev) => !prev);
          }}
        />
      );
    },
  ],
};

export default meta;
