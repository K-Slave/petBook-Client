import { Meta, StoryObj } from "@storybook/react";
import usePWShowHide from "@lib/hooks/input/usePWShowHide";
import PWShowHideButton from ".";

const Temp = ({ isTyping }: { isTyping: boolean }) => {
  const { isPWHide, onClickPW } = usePWShowHide();

  return (
    <>
      <PWShowHideButton
        isTyping={isTyping}
        isPWHide={isPWHide}
        onClick={onClickPW}
      />
    </>
  );
};

const meta: Meta<typeof PWShowHideButton> = {
  title: "common/PWShowHideButton",
  component: PWShowHideButton,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    isTyping: true,
  },
  decorators: [
    (Story, ctx) => {
      return (
        <div
          style={{
            position: "relative",
            width: "100px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Temp isTyping={ctx.args.isTyping} />
        </div>
      );
    },
  ],
};

type Story = StoryObj<typeof PWShowHideButton>;
export const Default: Story = {};

export const NoTyping: Story = {
  args: {
    isTyping: false,
  },
};

export default meta;
