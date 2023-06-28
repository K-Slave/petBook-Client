import { Meta, StoryObj } from "@storybook/react";
import FormModuleWrap from "./FormModuleWrap";

const meta: Meta<typeof FormModuleWrap> = {
  title: "common/Form/FormModuleWrap",
  component: FormModuleWrap,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

type Story = StoryObj<typeof FormModuleWrap>;
export const Default: Story = {
  args: {
    width: "500px",
    children: (
      <>
        <input placeholder="다양한" />
        <input placeholder="폼 UI" />
        <input placeholder="요소가" />
        <input placeholder="올수있어요" />
      </>
    ),
  },
  decorators: [
    (Story, ctx) => <Story {...ctx.args}>{ctx.args.children}</Story>,
  ],
};

export default meta;
