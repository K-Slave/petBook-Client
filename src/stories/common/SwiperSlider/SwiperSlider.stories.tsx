import { Meta } from "@storybook/react";
import CommunityBanner_ from "@components/community/CommunityBanner";
import CustomSwiper from ".";

const meta: Meta<typeof CustomSwiper> = {
  title: "common/SwiperSlider",
  component: CustomSwiper,
};

export const CommunityBanner = () => <CommunityBanner_ />;

export default meta;
