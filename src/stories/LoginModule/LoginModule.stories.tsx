import { Meta, StoryObj } from "@storybook/react";
import LoginModule from ".";
import { useState } from "react";
import createQueryClient from "@lib/utils/createQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";

const meta: Meta<typeof LoginModule> = {
  title: "LoginModule/LoginModule",
  component: LoginModule,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

type Story = StoryObj<typeof LoginModule>;

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
