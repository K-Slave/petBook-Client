import CommunitySection from "../../CommunitySection";
import ArticleList from "./ArticleList";
import PageButtonBox from "./PageButtonBox";
import ArticleFilter from "./ArticleFilter";

const ArticleListSection = () => {
  return (
    <CommunitySection
      title="Live talk"
      description="실시간 업로드되는 유저들의 이야기"
    >
      <ArticleFilter />
      <ArticleList />
      <PageButtonBox />
    </CommunitySection>
  );
};

export default ArticleListSection;
