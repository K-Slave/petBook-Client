import MainSection from "../MainSection";
import VoteList from "./VoteList";

const VoteSection = () => {
  return (
    <MainSection title="Talk" description="지금 HOT한 투표! 당신의 선택은?">
      <VoteList />
    </MainSection>
  );
};

export default VoteSection;
