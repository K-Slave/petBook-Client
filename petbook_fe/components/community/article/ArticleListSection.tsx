import CommunitySection from "../CommunitySection";
import ArticleFilter from "./ArticleFilter";
import ArticleListPagination from "./ArticleListPagination";

const ArticleListSection = () => {
  return (
    <CommunitySection
      title="Live talk"
      description="실시간 업로드되는 유저들의 이야기"
    >
      <ArticleFilter />
      <ArticleListPagination />
    </CommunitySection>
  );
};

export default ArticleListSection;
