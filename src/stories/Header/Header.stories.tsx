import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { useState } from "react";
import createQueryClient from "@lib/utils/createQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import TopNav from "./TopNav";
import { cookieKeyName } from "@lib/globalConst";
import tokenParser from "@lib/server/parse/tokenParser";

const meta: Meta<typeof Header> = {
  title: "Header/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const [queryClient] = useState(() => createQueryClient());

      return (
        <QueryClientProvider client={queryClient}>
          <div style={{ width: "100%", position: "relative" }}>
            <Story />
            <TopNav maxWidth="100%" />
          </div>
        </QueryClientProvider>
      );
    },
  ],
};
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    position: "absolute",
    maxWidth: "100%",
  },
  decorators: [
    (Story) => {
      const [queryClient] = useState(() => createQueryClient());

      const { userInfo } = tokenParser(
        process.env.NEXT_PUBLIC_TESTER as string
      );

      queryClient.setQueryData([cookieKeyName.userInfo], userInfo);

      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
};

export const LoggedOut: Story = {};

export default meta;
