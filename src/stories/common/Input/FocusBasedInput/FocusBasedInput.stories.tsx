import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import inputImg from "@/image/inputImg";
import authOptions from "@lib/globalConst/authOptions";
import FocusBasedInput, { FocusBasedInputProps } from ".";

const meta: Meta<typeof FocusBasedInput> = {
  title: "common/Input/FocusBasedInput",
  component: FocusBasedInput,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

type Story = StoryObj<typeof FocusBasedInput>;

type EmailExampleProps = FocusBasedInputProps;

const EmailExample = (props: EmailExampleProps) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form>
      <FocusBasedInput
        {...props}
        value={value}
        onChange={onChange}
        bgUrl={
          value.length > 0 ? inputImg.face_wink_on : inputImg.face_wink_off
        }
      />
    </form>
  );
};

export const Email: Story = {
  args: {
    type: "email",
    maxLength: authOptions.email.max,
    placeholder: "이메일",
    pattern: process.env.NEXT_PUBLIC_EMAIL_REG,
    required: true,
    bgWidth: "1rem",
    bgHeight: "1rem",
  },
  decorators: [
    (Story, ctx) => {
      return <EmailExample {...ctx.args} />;
    },
  ],
};

const PasswordExample = (props: EmailExampleProps) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form>
      <FocusBasedInput
        {...props}
        value={value}
        onChange={onChange}
        bgUrl={value.length > 0 ? inputImg.keyhole_on : inputImg.keyhole_off}
      />
    </form>
  );
};

export const Password: Story = {
  args: {
    type: "password",
    autoComplete: "current-password",
    minLength: authOptions.password.min,
    maxLength: authOptions.password.max,
    placeholder: "비밀번호",
    pattern: process.env.NEXT_PUBLIC_PASSWORD_REG,
    required: true,
    bgWidth: "1rem",
    bgHeight: "1rem",
  },
  decorators: [
    (Story, ctx) => {
      return <PasswordExample {...ctx.args} />;
    },
  ],
};

const LabeledExample = (props: EmailExampleProps) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form>
      <FocusBasedInput {...props} value={value} onChange={onChange}>
        <span style={{ padding: "15px" }}>닉네임</span>
      </FocusBasedInput>
    </form>
  );
};

export const Labeled: Story = {
  args: {
    type: "text",
    maxLength: 50,
    placeholder: "무엇인가 입력하세요",
    required: true,
  },
  decorators: [
    (Story, ctx) => {
      return <LabeledExample {...ctx.args} />;
    },
  ],
};

export default meta;
