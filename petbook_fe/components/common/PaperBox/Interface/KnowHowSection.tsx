import styled from "styled-components";
import palette from "../../../../lib/modules/palette";
import KnowhowPaperBox from "./KnowhowPaperBox";

const KnowHowSectionBox = styled.section`
  display: flex;
  gap: 24px;
`;

const KnowHowSection = () => {
  const user = "유저프로필";
  const contents = "질문이 들어갑니다 질문이 들어갑니다 질문이 들어갑니다";
  const sample_post = [
    {
      timeline: "1시간전",
      contents,
      user,
      to: "/knowhow",
      color: "",
    },
    {
      timeline: "3시간전",
      contents,
      user,
      to: "/knowhow",
      color: "",
    },
    {
      timeline: "1일전",
      contents,
      user,
      to: "/knowhow",
      color: "",
    },
    {
      timeline: "10일전",
      contents,
      user,
      to: "/knowhow",
      color: "",
    },
  ];

  return (
    <KnowHowSectionBox>
      {sample_post.map((elem, idx) => {
        return <KnowhowPaperBox key={elem.contents} {...elem} />;
      })}
    </KnowHowSectionBox>
  );
};

export default KnowHowSection;
