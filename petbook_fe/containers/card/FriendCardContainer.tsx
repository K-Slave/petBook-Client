import CardListSection from "../../components/common/CardUI/CardListSection";
import CardListSlide from "../../components/common/CardUI/CardListSlide";
import ProfileCard from "../../components/common/CardUI/ProfileCard";

export default function FriendCardContainer() {
  const sample_user = [
    "yoonOcean",
    "joeun",
    "hanseung",
    "insung",
    "dummy_user",
    "dummy_user",
    "dummy_user",
    "dummy_user",
    "dummy_user",
    "dummy_user",
  ];
  const sample_ages = [29, 28, 30, 29];

  return (
    <CardListSection
      cardname='FriendCard__'
      sectionTitle='새로운 친구 만나보기'
      userNameList={sample_user}
      userAgeList={sample_ages}
    />
  );
}
