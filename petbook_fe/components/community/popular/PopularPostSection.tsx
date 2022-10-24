import CommunitySection from "../CommunitySection";
import WeekFilter from "./WeekFilter";
import PopularPostList from "./PopularPostList";

const PopularPostSection = () => {
  return (
    <CommunitySection
      title="Community"
      description="매주 인기 게시물을 확인하세요"
    >
      <WeekFilter />
      <PopularPostList />
    </CommunitySection>
  );
};

export default PopularPostSection;
