import { Meta } from "@storybook/react";
import { useSetRecoilState } from "recoil";
import loadingState from "@atoms/common/loadingState";
import Loader from ".";

const meta: Meta<typeof Loader> = {
  title: "common/Loader",
  component: Loader,
};

const MockLoader = () => {
  const setLoadingState = useSetRecoilState(loadingState);
  setLoadingState(true);
  return <Loader />;
};

const Template = () => <MockLoader />;
export const Example = Template.bind({});

export default meta;
