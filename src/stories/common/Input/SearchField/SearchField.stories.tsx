import { Meta, StoryObj } from "@storybook/react";
import SearchField from ".";

const meta: Meta<typeof SearchField> = {
  title: "common/Input/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

type Story = StoryObj<typeof SearchField>;
export const Community: Story = {
  args: {
    placeholder: "관심있는 내용을 검색해보세요!",
    target: "community",
  },
};

export const Hospital: Story = {
  args: {
    placeholder: "원하는 위치를 검색해보세요!",
    target: "hospital",
  },
};

export default meta;
