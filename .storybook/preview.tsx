import type { Preview } from "@storybook/react";
import { RecoilRoot } from "recoil";
import React from "react";
import NextGlobalStyle from "../src/components/GlobalStyle";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    decorators: [
      (Story) => {
        return (
          <RecoilRoot>
            <Story />
            <NextGlobalStyle />
          </RecoilRoot>
        );
      },
    ],
  },
};

export default preview;
