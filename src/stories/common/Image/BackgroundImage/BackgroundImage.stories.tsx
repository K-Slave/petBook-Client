import { Meta, StoryObj } from "@storybook/react";
import BackgroundImage from "./BackgroundImage";

const meta: Meta<typeof BackgroundImage> = {
  title: "common/Image/BackgroundImage",
  component: BackgroundImage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

type Story = StoryObj<typeof BackgroundImage>;

const originUrl =
  process.env.NODE_ENV === "production"
    ? "https://petbook.site"
    : "http://localhost:3000";

export const BgImgSpan: Story = {
  args: {
    url: `${originUrl}/icons/icons8-backjo-96.png`,
    width: "3.125rem",
    height: "3.125rem",
    bgPosition: "center",
    tag: "span",
  },
};

export const BgImgA: Story = {
  args: {
    url: `${originUrl}/icons/icons8-gosum-96.png`,
    width: "3.125rem",
    height: "3.125rem",
    bgPosition: "center",
    tag: "a",
    anchorAttr: {
      href: "https://icons8.com/icon/aKEeT9FEK2cQ/%EA%B3%A0%EC%8A%B4%EB%8F%84%EC%B9%98",
      target: "_blank",
      rel: "noopener",
    },
  },
};

export const BgImgDiv: Story = {
  args: {
    url: `${originUrl}/Landing__Background.png`,
    width: "18.75rem",
    height: "18.75rem",
    bgPosition: "center",
    tag: "div",
  },
};

export default meta;
