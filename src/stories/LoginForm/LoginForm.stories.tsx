import { Meta, StoryObj } from "@storybook/react";
import LoginForm from ".";
import { useState } from "react";
import createQueryClient from "@lib/utils/createQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";

const meta: Meta<typeof LoginForm> = {
  title: "Form/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  decorators: [
    (Story, ctx) => {
      const [queryClient] = useState(() => createQueryClient());

      return (
        <QueryClientProvider client={queryClient}>
          <Story {...ctx.args} />
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;
