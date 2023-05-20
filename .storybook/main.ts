import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    if (config.resolve && config.resolve.alias) {
      config.resolve.alias["@components"] = path.resolve(
        __dirname,
        "../src/components/"
      );

      config.resolve.alias["@pages"] = path.resolve(__dirname, "../src/pages/");

      config.resolve.alias["@lib"] = path.resolve(__dirname, "../src/lib/");

      config.resolve.alias["@containers"] = path.resolve(
        __dirname,
        "../src/containers/"
      );

      config.resolve.alias["@atoms"] = path.resolve(__dirname, "../src/atoms/");

      config.resolve.alias["@"] = path.resolve(__dirname, "../src/");
    }

    return config;
  },
};
export default config;
