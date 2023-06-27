import { Meta, StoryObj } from "@storybook/react";
import SearchField from ".";

const meta: Meta<typeof SearchField> = {
  title: "common/Input/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: {
    placeholder: "기본 검색필드",
  },
};

export const CustomWrap: Story = {
  args: {
    width: "100%",
    height: "5rem",
    focusColor: "blue",
    activeColor: "green",
    placeholder: "너비와 높이를 조절할 수 있어요.",
  },
};

export const CustomInput: Story = {
  args: {
    width: "20rem",
    placeholder: "커스텀 인풋 컴포넌트를 렌더링할 수 있어요",
    SearchFieldInput: SearchField.getSearchFieldInput({
      placeholderColor: "gray",
      borderColor: {
        withoutValue: "black",
        withValue: "blue",
      },
      style: {
        color: "red",
      },
      type: "text",
    }),
  },
};

export const CustomIcon: Story = {
  args: {
    placeholder: "검색",
    SearchIcon: <span style={{ textAlign: "center" }}>검색 아이콘</span>,
    ClearButton: SearchField.getClearButton({ children: "초기화" }),
  },
};

export const CustomKeywordListBox: Story = {
  args: {
    width: "30rem",
    placeholder: "커스텀 키워드 목록 박스 컴포넌트를 렌더링할 수 있어요",
    KeywordListBox: (
      <SearchField.KeywordListBox
        list={[
          { id: 1, value: "아무 값" },
          { id: 2, value: "ㅎㅎㅎ" },
        ]}
        renderItem={(item) => (
          <SearchField.KeywordItem
            typography="h4-bold"
            onClick={() => alert(item.value)}
          >
            <p>{item.value}</p>
          </SearchField.KeywordItem>
        )}
      />
    ),
  },
};

export const RecentSearchKeywordListBox: Story = {
  args: {
    width: "30rem",
    placeholder: "커뮤니티 최근 검색어 목록 (도메인 변경 가능)",
    KeywordListBox: <SearchField.RecentKeywordList domain="community" />,
  },
};

export const CommunityDomain: Story = {
  args: {
    placeholder: "관심있는 내용을 검색해보세요!",
    domain: "community",
    KeywordListBox: <SearchField.RecentKeywordList domain="community" />,
  },
};

export const HospitalDomain: Story = {
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
          <SearchField.KeywordItem onClick={() => alert(item.value)}>
            <p>{item.value}</p>
          </SearchField.KeywordItem>
        )}
      />
    ),
  },
};

export default meta;
