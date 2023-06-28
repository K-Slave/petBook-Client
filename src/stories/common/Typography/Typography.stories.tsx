import { Meta, StoryObj } from "@storybook/react";
import Typography from ".";

const meta: Meta<typeof Typography> = {
  title: "common/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

type Story = StoryObj<typeof Typography>;
export const Heading1Bold: Story = {
  args: {
    tag: "p",
    children: "Montes nascetur ridiculus mus mauris",
    variant: "h1-bold",
  },
};

export const Heading1Medium: Story = {
  args: {
    tag: "h2",
    children: "Montes nascetur ridiculus mus mauris",
    variant: "h1-medium",
  },
};

export const Heading2Bold: Story = {
  args: {
    tag: "span",
    children: "Scelerisque varius morbi enim nunc",
    variant: "h2-bold",
  },
};

export const Heading2Medium: Story = {
  args: {
    tag: "h1",
    children: "Scelerisque varius morbi enim nunc",
    variant: "h2-medium",
  },
};

export const Heading3Bold: Story = {
  args: {
    tag: "p",
    children: "Erat pellentesque adipiscing commodo elit",
    variant: "h3-bold",
  },
};

export const Heading3Medium: Story = {
  args: {
    tag: "p",
    children: "Erat pellentesque adipiscing commodo elit",
    variant: "h3-medium",
  },
};

export const Heading4Bold: Story = {
  args: {
    tag: "h3",
    children: "At urna condimentum mattis pellentesque",
    variant: "h4-bold",
  },
};

export const Heading4Medium: Story = {
  args: {
    tag: "h4",
    children: "At urna condimentum mattis pellentesque",
    variant: "h4-medium",
  },
};

export const BodyDefaultBold: Story = {
  args: {
    tag: "span",
    children: "Lorem ipsum dolor sit amet, consectetur",
    variant: "body-default-bold",
  },
};

export const BodyDefaultMedium: Story = {
  args: {
    tag: "span",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum. Proin sed libero enim sed faucibus. Euismod porta lorem mollis aliquam ut.",
    variant: "body-default-medium",
  },
};

export const BodySmallBold: Story = {
  args: {
    tag: "h4",
    children:
      "Nec sagittis aliquam malesuada bibendum. Proin sed libero enim sed faucibus. Euismod porta lorem mollis aliquam ut. ",
    variant: "body-small-bold",
  },
};

export const BodySmallMedium: Story = {
  args: {
    tag: "h4",
    children:
      "Nec sagittis aliquam malesuada bibendum. Proin sed libero enim sed faucibus. Euismod porta lorem mollis aliquam ut. ",
    variant: "body-small-medium",
  },
};

export const Label: Story = {
  args: {
    tag: "span",
    children: "Eget lorem dolor sed viverra",
    variant: "label",
  },
};

export const ButtonDefault: Story = {
  args: {
    tag: "button",
    children: "Enim neque",
    variant: "button-default",
  },
};

export const ButtonSmall: Story = {
  args: {
    tag: "button",
    children: "Enim neque",
    variant: "button-small",
  },
};

export const TagSmall: Story = {
  args: {
    tag: "span",
    children: "Enim neque",
    variant: "tag-small",
  },
};

export default meta;
