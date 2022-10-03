import React from "react";
import KnowHowSection from "../components/common/PaperBox/Interface/KnowHowSection";
import PopularPostSection from "../components/community/popular/PopularPostSection";
import PostSection from "../components/community/post/PostSection";
import VoteSection from "../components/community/vote/VoteSection";

const SectionContainer = () => {
  return (
    <>
      <VoteSection />
      <PopularPostSection />
      <PostSection />
      <KnowHowSection />
    </>
  );
};

export default React.memo(SectionContainer);
