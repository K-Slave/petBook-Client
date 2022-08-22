import { MYPAGE_MENUS } from "./MyPageNav";
import styled from "styled-components";

const Section = styled.section`
  flex-grow: 1;
  padding: 2rem;
  height: 80vh;
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

interface MyPageSectionProps {
  current: number;
}

const MyPageSection = ({ current }: MyPageSectionProps) => {
  return (
    <Section>
      <h1>{MYPAGE_MENUS[current].text}</h1>
    </Section>
  );
};

export default MyPageSection;
