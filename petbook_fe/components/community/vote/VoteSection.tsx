import CommunitySection from "../CommunitySection";
import VoteList from "./VoteList";

const VoteSection = () => {
  return (
    <CommunitySection
      title="Talk"
      description="지금 HOT한 투표! 당신의 선택은?"
    >
      <VoteList />
    </CommunitySection>
  );
};

export default VoteSection;
