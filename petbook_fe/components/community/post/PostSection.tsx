import MainSection from "../MainSection";
import PostFilter from "./PostFilter";
import PostList from "./PostList";

const PostSection = () => {
  return (
    <MainSection
      title="Live talk"
      description="실시간 업로드되는 유저들의 이야기"
    >
      <PostFilter />
      <PostList />
    </MainSection>
  );
};

export default PostSection;
