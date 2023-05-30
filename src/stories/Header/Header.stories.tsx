import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { useState } from "react";
import createQueryClient from "@lib/utils/createQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import TopNav from "./TopNav";
import { cookieKeyName } from "@lib/globalConst";

const meta: Meta<typeof Header> = {
  title: "Header/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    position: "absolute",
    maxWidth: "100%",
    isScrollUse: false,
    navView: false,
    isDevelopment: true,
  },
  decorators: [
    (Story, ctx) => {
      const [queryClient] = useState(() => createQueryClient());

      return (
        <QueryClientProvider client={queryClient}>
          <div style={{ width: "100%", position: "relative" }}>
            <Story {...ctx.args} />
            <TopNav
              maxWidth="100%"
              isScrollUse={ctx.args.isScrollUse}
              navView={ctx.args.navView}
              isDevelopment={ctx.args.isDevelopment}
            />
          </div>
        </QueryClientProvider>
      );
    },
  ],
};

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    position: "absolute",
    maxWidth: "100%",
    isScrollUse: false,
    navView: false,
    isDevelopment: true,
  },
  decorators: [(Story, ctx) => <Story {...ctx.args} />],
};

export const ScrollNav: Story = {
  args: {
    position: "absolute",
    maxWidth: "100%",
    isScrollUse: false,
    navView: true,
    isDevelopment: true,
  },
  decorators: [(Story, ctx) => <Story {...ctx.args} />],
};

export const LoggedIn: Story = {
  args: {
    position: "absolute",
    maxWidth: "100%",
    isScrollUse: false,
    navView: false,
    isDevelopment: true,
  },
  decorators: [
    (Story, ctx) => {
      const [queryClient] = useState(() => createQueryClient());

      queryClient.setQueryData([cookieKeyName.userInfo], {
        iss: "petbook",
      });

      return (
        <QueryClientProvider client={queryClient}>
          <Story {...ctx.args} />
        </QueryClientProvider>
      );
    },
  ],
};

export const LoggedOut: Story = {
  args: {
    position: "absolute",
    maxWidth: "100%",
    isScrollUse: false,
    navView: false,
  },
  decorators: [(Story, ctx) => <Story {...ctx.args} />],
};

export default meta;
