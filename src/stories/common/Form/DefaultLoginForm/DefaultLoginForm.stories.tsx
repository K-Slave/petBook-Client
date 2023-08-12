import { Meta, StoryObj } from "@storybook/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import createQueryClient from "@lib/utils/createQueryClient";
import DefaultLoginForm from "./DefaultLoginForm";

const meta: Meta<typeof DefaultLoginForm> = {
  title: "common/Form/DefaultLoginForm",
  component: DefaultLoginForm,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

type Story = StoryObj<typeof DefaultLoginForm>;

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
