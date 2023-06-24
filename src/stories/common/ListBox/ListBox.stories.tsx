import { Meta, StoryObj } from "@storybook/react";
import ListBox from ".";
import FaceHappy from "@/stories/Icon/FaceHappy";
import Clock from "@/stories/Icon/Clock";
import Typography from "../Typography";

const meta: Meta<typeof ListBox> = {
  title: "common/ListBox",
  component: ListBox,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

type Story = StoryObj<typeof ListBox>;

const itemProps = {
  tag: "button" as const,
  variant: "body-small-medium" as const,
  style: {
    width: "100%",
    padding: "0.5rem 0 0.5rem 1.25rem",
  },
};
export const Default: Story = {
  args: {
    width: "6.25rem",
    children: (
      <>
        <Typography {...itemProps}>메뉴1</Typography>
        <Typography {...itemProps}>메뉴2</Typography>
      </>
    ),
  },
};

const itemProps2 = {
  tag: "button" as const,
  variant: "body-small-medium" as const,
  style: {
    gap: "0.5rem",
    padding: "0.5rem 0",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
export const Custom: Story = {
  args: {
    children: (
      <>
        <Typography {...itemProps2}>
          <FaceHappy width="20" height="20" />
          메뉴1
        </Typography>
        <Typography {...itemProps2}>
          <Clock width="20" height="20" />
          메뉴2
        </Typography>
      </>
    ),
    width: "15rem",
    bgColor: "red",
    color: "white",
  },
};
export default meta;
