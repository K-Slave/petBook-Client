import { Meta, StoryObj } from "@storybook/react";
import Skeleton from ".";

const meta: Meta<typeof Skeleton> = {
  title: "common/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof Skeleton>;
export const Example: Story = {
  args: {
    width: "20rem",
    height: "5rem",
    borderRadius: "8px",
    copy: 5,
  },
};

export default meta;
