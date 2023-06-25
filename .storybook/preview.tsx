import type { Preview } from "@storybook/react";
import { RecoilRoot } from "recoil";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import NextGlobalStyle from "../src/styles/Global.style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const queryClient = new QueryClient();

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: NextGlobalStyle, // Adds your GlobalStyle component to all stories
  }),
  (Story) => {
    return (
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Story />
        </RecoilRoot>
      </QueryClientProvider>
    );
  },
];

export default preview;
