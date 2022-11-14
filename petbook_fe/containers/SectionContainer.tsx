import React from "react";
import KnowHowSection from "../components/common/PaperBox/Interface/KnowHowSection";
import PopularPostSection from "../components/community/popular/PopularPostSection";
import VoteSection from "../components/community/vote/VoteSection";

const SectionContainer = () => {
  return (
    <>
      <VoteSection />
      <PopularPostSection />
      <KnowHowSection />
    </>
  );
};

export default React.memo(SectionContainer);
