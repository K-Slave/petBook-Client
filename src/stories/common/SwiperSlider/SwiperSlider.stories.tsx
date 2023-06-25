import { Meta, StoryObj } from "@storybook/react";
import CustomSwiper from ".";
import CommunityBanner_ from "@components/community/CommunityBanner";

const meta: Meta<typeof CustomSwiper> = {
  title: "common/SwiperSlider",
  component: CustomSwiper,
};

export const CommunityBanner = () => <CommunityBanner_ />;

export default meta;
