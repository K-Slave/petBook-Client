import type { Preview } from "@storybook/react";
import { RecoilRoot } from "recoil";
import React from "react";
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

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: NextGlobalStyle, // Adds your GlobalStyle component to all stories
  }),
  (Story) => {
    return (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    );
  },
];

export default preview;
