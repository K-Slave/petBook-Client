import MainSection from "../MainSection";
import WeekFilter from "./WeekFilter";
import PopularPostList from "./PopularPostList";

const PopularPostSection = () => {
  return (
    <MainSection title="Community" description="매주 인기 게시물을 확인하세요">
      <WeekFilter />
      <PopularPostList />
    </MainSection>
  );
};

export default PopularPostSection;
