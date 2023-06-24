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
    domain: "community",
  },
};

export const Hospital: Story = {
  args: {
    placeholder: "원하는 위치를 검색해보세요!",
    domain: "hospital",
    KeywordListBox: (
      <SearchField.KeywordListBox
        list={[
          { id: 1, value: "아무 값" },
          { id: 2, value: "ㅎㅎㅎ" },
        ]}
        renderItem={(item) => (
          <SearchField.KeywordItem>
            <p>{item.value}</p>
          </SearchField.KeywordItem>
        )}
      />
    ),
  },
};

export default meta;
